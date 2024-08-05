import { Student } from '../models/student';
import { StudentApi } from '../api/studentApi';

export class StudentService {
  async getStudents(): Promise<Student[]> {
    return StudentApi.getStudents();
  }

  async getStudent(id: number): Promise<Student> {
    return StudentApi.getStudent(id);
  }

  async createStudent(student: Student): Promise<Student> {
    return StudentApi.createStudent(student);
  }

  async updateStudent(id: number, student: Student): Promise<Student> {
    return StudentApi.updateStudent(id, student);
  }

  async deleteStudent(id: number): Promise<void> {
    return StudentApi.deleteStudent(id);
  }
}
