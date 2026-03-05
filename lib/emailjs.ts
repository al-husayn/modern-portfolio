import emailjs from "@emailjs/browser";

import { ContactFormData } from "@/components/contact/types";

type EmailConfigKey = "serviceId" | "templateId" | "publicKey";

const EMAIL_CONFIG: Readonly<Record<EmailConfigKey, string | undefined>> = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const EMAIL_CONFIG_ENV_KEYS: Readonly<Record<EmailConfigKey, string>> = {
  serviceId: "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
  templateId: "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
  publicKey: "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
};

export const getMissingEmailConfigVars = (): string[] => {
  return (Object.keys(EMAIL_CONFIG) as EmailConfigKey[])
    .filter((key) => !EMAIL_CONFIG[key])
    .map((key) => EMAIL_CONFIG_ENV_KEYS[key]);
};

const toTemplateParams = (formData: ContactFormData) => ({
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
});

export const sendContactEmail = async (
  formData: ContactFormData,
): Promise<void> => {
  await emailjs.send(
    EMAIL_CONFIG.serviceId!,
    EMAIL_CONFIG.templateId!,
    toTemplateParams(formData),
    EMAIL_CONFIG.publicKey!,
  );
};
