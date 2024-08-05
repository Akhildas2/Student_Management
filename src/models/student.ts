// src/models/student.ts

export interface Student {
  id?: number;
  name: string;
  email: string;
  phone: string;
  photo?: string; // Add photo field
}
