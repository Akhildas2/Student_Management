// src/api/studentApi.ts

import axios from 'axios';
import { Student } from '../models/student';

const API_URL = 'https://jsonplaceholder.typicode.com/users'; 

export class StudentApi {
  static async getStudents(): Promise<Student[]> {
    try {
      const response = await axios.get<Student[]>(API_URL);
      return response.data.map(student => ({
        ...student,
        photo: `https://i.pravatar.cc/150?img=${student.id}` // Simulated photo URL
      }));
    } catch (error) {
      throw new Error(`Failed to fetch students: ${error}`);
    }
  }

  static async getStudent(id: number): Promise<Student> {
    try {
      const response = await axios.get<Student>(`${API_URL}/${id}`);
      return {
        ...response.data,
        photo: `https://i.pravatar.cc/150?img=${id}` // Simulated photo URL
      };
    } catch (error) {
      throw new Error(`Failed to fetch student: ${error}`);
    }
  }

  static async createStudent(student: Student): Promise<Student> {
    try {
      const response = await axios.post<Student>(API_URL, student);
      return {
        ...response.data,
        photo: `https://i.pravatar.cc/150?img=${response.data.id}` // Simulated photo URL
      };
    } catch (error) {
      throw new Error(`Failed to create student: ${error}`);
    }
  }

  static async updateStudent(id: number, student: Student): Promise<Student> {
    try {
      const response = await axios.put<Student>(`${API_URL}/${id}`, student);
      return {
        ...response.data,
        photo: `https://i.pravatar.cc/150?img=${id}` // Simulated photo URL
      };
    } catch (error) {
      throw new Error(`Failed to update student: ${error}`);
    }
  }

  static async deleteStudent(id: number): Promise<void> {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      throw new Error(`Failed to delete student: ${error}`);
    }
  }
}
