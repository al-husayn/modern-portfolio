"use client";

import { useState, useCallback, useMemo } from "react";

import {
  ContactFormData,
  ContactFormField,
  ContactFormErrors,
  UseContactFormReturn,
} from "@/components/contact/types";
import { validateField, validateForm, hasErrors } from "@/lib/utils";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactFormFields: readonly ContactFormField[] = [
  "name",
  "email",
  "subject",
  "message",
];

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touchedFields, setTouchedFields] = useState<Set<ContactFormField>>(
    new Set(),
  );

  const handleInputChange = useCallback(
    (field: ContactFormField, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));

      if (touchedFields.has(field)) {
        const fieldError = validateField(field, value);

        setErrors((prev) => ({
          ...prev,
          [field]: fieldError,
        }));
      }
    },
    [touchedFields],
  );

  const validateFieldAndMarkTouched = useCallback(
    (field: ContactFormField, value: string) => {
      setTouchedFields((prev) => new Set(prev).add(field));

      const fieldError = validateField(field, value);

      setErrors((prev) => ({
        ...prev,
        [field]: fieldError,
      }));

      return fieldError;
    },
    [],
  );

  const handleSubmit = useCallback(
    async (
      onSubmit: (data: ContactFormData) => Promise<void>,
    ): Promise<void> => {
      const formErrors = validateForm(formData);

      setErrors(formErrors);
      setTouchedFields(new Set(contactFormFields));

      if (!hasErrors(formErrors)) {
        await onSubmit(formData);
      }
    },
    [formData],
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setTouchedFields(new Set());
  }, []);

  const isValid = useMemo(() => {
    const formErrors = validateForm(formData);

    return !hasErrors(formErrors);
  }, [formData]);

  return {
    formData,
    errors,
    isValid,
    handleInputChange,
    handleSubmit,
    resetForm,
    validateField: validateFieldAndMarkTouched,
  };
};
