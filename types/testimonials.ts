export interface Testimonial {
  readonly id: number;
  readonly name: string;
  readonly role: string;
  readonly content: string;
  readonly avatar: string;
}

export type TestimonialCardProps = Omit<Testimonial, "id">;
