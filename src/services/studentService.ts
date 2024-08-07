import { Student } from '../models/student'; // Import the Student interface
import { StudentApi } from '../api/studentApi'; // Import the StudentApi class

// Service class for handling student data operations
export class StudentService {
  // Method to fetch all students
  async getStudents(): Promise<Student[]> {
    return StudentApi.getStudents(); // Calls the API method to get the list of students
  }

  // Method to fetch a specific student by ID
  async getStudent(id: number): Promise<Student> {
    return StudentApi.getStudent(id); // Calls the API method to get the student details
  }

  // Method to create a new student
  async createStudent(student: Student): Promise<Student> {
    return StudentApi.createStudent(student); // Calls the API method to create a new student
  }

  // Method to update an existing student by ID
  async updateStudent(id: number, student: Student): Promise<Student> {
    return StudentApi.updateStudent(id, student); // Calls the API method to update the student details
  }

  // Method to delete a student by ID
  async deleteStudent(id: number): Promise<void> {
    return StudentApi.deleteStudent(id); // Calls the API method to delete the student
  }
}
