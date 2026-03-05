import emailjs from "@emailjs/browser";

import { ContactFormData } from "@/types/contact";

type EmailConfigKey = "serviceId" | "templateId" | "publicKey";

type NormalizedContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

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

const normalizeFormData = (
  formData: ContactFormData,
): NormalizedContactFormData => ({
  name: formData.name.trim(),
  email: formData.email.trim(),
  subject: formData.subject.trim(),
  message: formData.message.trim(),
});

const buildComposedMessage = (formData: NormalizedContactFormData): string => {
  return [
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    `Subject: ${formData.subject}`,
    "",
    formData.message,
  ].join("\n");
};

const toTemplateParams = (formData: ContactFormData) => {
  const normalizedData = normalizeFormData(formData);
  const composedMessage = buildComposedMessage(normalizedData);

  return {
    sender_name: normalizedData.name,
    sender_email: normalizedData.email,
    sender_subject: normalizedData.subject,
    sender_message: normalizedData.message,
    name: normalizedData.name,
    email: normalizedData.email,
    visitor_name: normalizedData.name,
    visitor_email: normalizedData.email,
    user_name: normalizedData.name,
    user_email: normalizedData.email,
    from_name: normalizedData.name,
    from_email: normalizedData.email,
    reply_to: normalizedData.email,
    reply_email: normalizedData.email,
    subject: normalizedData.subject,
    message: composedMessage,
    text: composedMessage,
    content: composedMessage,
  };
};

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

