"use client";

import { useCallback, useState } from "react";
import { addToast } from "@heroui/react";

import { ContactFormData } from "@/components/contact/types";
import { PageHeader } from "@/components/page-header";
import { ContactCard } from "@/components/contact/contact-card";
import { ContactForm } from "@/components/contact/contact-form";
// import { ContactMap } from "@/components/contact/contact-map";
import { DATA } from "@/data";
import { getMissingEmailConfigVars, sendContactEmail } from "@/lib/emailjs";

const CONTACT_ERROR_MESSAGE =
  "Failed to send message. Please try again later.";
const EMAIL_CONFIG_MESSAGE =
  "Email configuration is incomplete. Please check environment variables.";

const getErrorMessage = (error: unknown): string => {
  return error instanceof Error ? error.message : CONTACT_ERROR_MESSAGE;
};

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (formData: ContactFormData): Promise<void> => {
      setIsSubmitting(true);
      setIsSuccess(false);
      setError(null);

      const missingVars = getMissingEmailConfigVars();

      if (missingVars.length > 0) {
        const missingVarsText = missingVars.join(", ");
        const message = `${EMAIL_CONFIG_MESSAGE} Missing: ${missingVarsText}`;

        setError(message);
        addToast({
          title: "Failed to Send Message",
          description: message,
          color: "danger",
        });
        setIsSubmitting(false);

        return;
      }

      try {
        await sendContactEmail(formData);

        setIsSuccess(true);
        addToast({
          title: "Message Sent Successfully",
          description:
            "Thank you for your message! I'll get back to you soon.",
          color: "success",
        });
      } catch (error) {
        const errorMessage = getErrorMessage(error);

        setError(errorMessage);
        addToast({
          title: "Failed to Send Message",
          description: errorMessage,
          color: "danger",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [],
  );

  const handleReset = useCallback(() => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  }, []);

  return (
    <section className="py-20">
      <PageHeader texts={DATA.morphingTexts.contact} />
      <div className="container px-4 mx-auto">
        <ContactCard
          heading={DATA.contact.heading}
          tagline={DATA.contact.tagline}
        >
          {/*<ContactMap src={DATA.contact.location.mapSrc} />*/}
          <ContactForm
            isSubmitting={isSubmitting}
            isSuccess={isSuccess}
            onReset={handleReset}
            onSubmit={handleSubmit}
          />
        </ContactCard>

        {error && (
          <div className="p-4 mt-6 border rounded-lg bg-danger-50 border-danger-200">
            <p className="text-sm text-danger-700">{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;
