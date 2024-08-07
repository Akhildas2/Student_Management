export interface Student {
  id?: number; // Optional because it might not be set for new students before creation
  name: string; // Student's name
  email: string; // Student's email
  phone: string; // Student's phone number
  photo?: string; // Optional photo URL
}
