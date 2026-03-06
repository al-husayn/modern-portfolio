import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  ContactFormField,
  ContactFormData,
  ContactFormErrors,
} from "@/types/contact";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).replace(/([A-Z])/g, " $1");

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email.trim());
};

export const validateRequired = (
  value: string,
  fieldName: string,
): string | undefined => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return `${fieldName} is required`;
  }

  return undefined;
};

export const validateMinLength = (
  value: string,
  minLength: number,
  fieldName: string,
): string | undefined => {
  const trimmedValue = value.trim();

  if (trimmedValue.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters long`;
  }

  return undefined;
};

export const validateField = (
  field: ContactFormField,
  value: string,
): string | undefined => {
  switch (field) {
    case "name":
      return (
        validateRequired(value, "Name") || validateMinLength(value, 2, "Name")
      );

    case "email":
      const requiredError = validateRequired(value, "Email");

      if (requiredError) return requiredError;

      return validateEmail(value)
        ? undefined
        : "Please enter a valid email address";

    case "subject":
      return (
        validateRequired(value, "Subject") ||
        validateMinLength(value, 3, "Subject")
      );

    case "message":
      return (
        validateRequired(value, "Message") ||
        validateMinLength(value, 10, "Message")
      );

    default:
      return undefined;
  }
};

export const validateForm = (formData: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  (Object.keys(formData) as ContactFormField[]).forEach((field) => {
    const error = validateField(field, formData[field]);

    if (error) {
      errors[field] = error;
    }
  });

  return errors;
};

export const hasErrors = (errors: ContactFormErrors): boolean => {
  return Object.values(errors).some((error) => !!error);
};

const PLACEHOLDER_LINK_HOSTS = new Set(["example.com", "www.example.com"]);
const PLACEHOLDER_MEDIA_HOSTS = new Set(["img.heroui.chat"]);

export const hasMeaningfulExternalLink = (url?: string): boolean => {
  if (!url) {
    return false;
  }

  try {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname?.trim();

    if (PLACEHOLDER_LINK_HOSTS.has(parsedUrl.hostname)) {
      return false;
    }

    if (
      parsedUrl.hostname === "github.com" &&
      (!pathname || pathname === "/")
    ) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

export const isPlaceholderMediaUrl = (url?: string): boolean => {
  if (!url) {
    return true;
  }

  try {
    return PLACEHOLDER_MEDIA_HOSTS.has(new URL(url).hostname);
  } catch {
    return true;
  }
};

export const hasRealProjectMedia = (media: readonly string[] = []): boolean => {
  return media.some((url) => !isPlaceholderMediaUrl(url));
};
