import axios from 'axios';
import { Student } from '../models/student'; // Importing the Student model

const API_URL = 'https://jsonplaceholder.typicode.com/users'; // Base URL for the API

export class StudentApi {
  // Method to fetch all students
  static async getStudents(): Promise<Student[]> {
    try {
      // Making a GET request to fetch the students
      const response = await axios.get<Student[]>(API_URL);
      // Mapping the response data to include a simulated photo URL
      return response.data.map(student => ({
        ...student,
        photo: `https://i.pravatar.cc/150?img=${student.id}` // Simulated photo URL
      }));
    } catch (error) {
      // Throwing an error if the request fails
      throw new Error(`Failed to fetch students: ${error}`);
    }
  }

  // Method to fetch a single student by ID
  static async getStudent(id: number): Promise<Student> {
    try {
      // Making a GET request to fetch a student by ID
      const response = await axios.get<Student>(`${API_URL}/${id}`);
      // Adding a simulated photo URL to the response data
      return {
        ...response.data,
        photo: `https://i.pravatar.cc/150?img=${id}` // Simulated photo URL
      };
    } catch (error) {
      // Throwing an error if the request fails
      throw new Error(`Failed to fetch student: ${error}`);
    }
  }

  // Method to create a new student
  static async createStudent(student: Student): Promise<Student> {
    try {
      // Making a POST request to create a new student
      const response = await axios.post<Student>(API_URL, student);
      // Adding a simulated photo URL to the response data
      return {
        ...response.data,
        photo: `https://i.pravatar.cc/150?img=${response.data.id}` // Simulated photo URL
      };
    } catch (error) {
      // Throwing an error if the request fails
      throw new Error(`Failed to create student: ${error}`);
    }
  }

  // Method to update an existing student
  static async updateStudent(id: number, student: Student): Promise<Student> {
    try {
      // Making a PUT request to update a student by ID
      const response = await axios.put<Student>(`${API_URL}/${id}`, student);
      // Adding a simulated photo URL to the response data
      return {
        ...response.data,
        photo: `https://i.pravatar.cc/150?img=${id}` // Simulated photo URL
      };
    } catch (error) {
      // Throwing an error if the request fails
      throw new Error(`Failed to update student: ${error}`);
    }
  }

  // Method to delete a student by ID
  static async deleteStudent(id: number): Promise<void> {
    try {
      // Making a DELETE request to remove a student by ID
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      // Throwing an error if the request fails
      throw new Error(`Failed to delete student: ${error}`);
    }
  }
}
