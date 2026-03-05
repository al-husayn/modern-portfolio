export interface ContactCardProps {
  heading: string;
  tagline: string;
  children: React.ReactNode;
}

export interface ContactMapProps {
  src: string;
  className?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormField = keyof ContactFormData;

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
  isSuccess: boolean;
  onReset: () => void;
}

export interface UseContactFormReturn {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isValid: boolean;
  handleInputChange: (field: ContactFormField, value: string) => void;
  handleSubmit: (
    onSubmit: (data: ContactFormData) => Promise<void>,
  ) => Promise<void>;
  resetForm: () => void;
  validateField: (field: ContactFormField, value: string) => string | undefined;
}
