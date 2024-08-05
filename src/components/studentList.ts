// src/components/studentList.ts
import { Student } from "../models/student";
import { StudentService } from "../services/studentService";
import { StudentForm } from "./studentForm";

export class StudentList {
  private studentService: StudentService;

  constructor(studentService: StudentService) {
    this.studentService = studentService;
  }

  async render() {
    try {
      const students: Student[] = await this.studentService.getStudents();
      let listHtml = '<div class="student-list-container">';
      listHtml += '<h1>Student List</h1>';
      listHtml += '<button id="addStudent" class="add-student-button">Add New Student</button>';
      listHtml += '<div class="student-list">';

      students.forEach(student => {
        const imageUrl = student.photo || 'https://via.placeholder.com/150';

        listHtml += `
          <div id="student-card-${student.id}" class="student-card">
            <img src="${imageUrl}" alt="${student.name}" />
            <div class="student-info">
              <h3>${student.name}</h3>
              <p>Email: ${student.email}</p>
              <p>Phone: ${student.phone}</p>
              <button onclick="editStudent(${student.id})" class="edit-button">Edit</button>
              <button onclick="deleteStudent(${student.id})" class="delete-button">Delete</button>
            </div>
          </div>`;
      });

      listHtml += '</div>'; // Close student-list div
      listHtml += '</div>'; // Close student-list-container div

      document.body.innerHTML = listHtml; // Replace existing content

      (window as any).editStudent = (id: number) => {
        const studentCard = document.getElementById(`student-card-${id}`);
        if (studentCard) {
          const studentInfo = studentCard.querySelector('.student-info');
          if (studentInfo) {
            new StudentForm(this.studentService, id, this.updateStudentCard.bind(this), studentInfo as HTMLElement).render();
          }
        }
      };

      (window as any).deleteStudent = async (id: number) => {
        try {
          await this.studentService.deleteStudent(id);
          // Remove the student card from the UI
          const studentCard = document.getElementById(`student-card-${id}`);
          studentCard?.remove();
          alert('Student deleted successfully');
        } catch (error) {
          alert(`Error: ${error}`);
        }
      };

      (document.getElementById('addStudent') as HTMLButtonElement)?.addEventListener('click', () => {
        new StudentForm(this.studentService, undefined, this.addStudentCard.bind(this)).render(); // Without ID to add a new student
      });

    } catch (error) {
      console.error(`Failed to load student list: ${error}`);
      document.body.innerHTML += `<p>Failed to load student list.</p>`;
    }
  }

  // Callback to update student card
  updateStudentCard(student: Student) {
    const studentCard = document.getElementById(`student-card-${student.id}`);
    if (studentCard) {
      const imageUrl = student.photo || 'https://via.placeholder.com/150';
      studentCard.innerHTML = `
        <img src="${imageUrl}" alt="${student.name}" />
        <div class="student-info">
          <h3>${student.name}</h3>
          <p>Email: ${student.email}</p>
          <p>Phone: ${student.phone}</p>
          <button onclick="editStudent(${student.id})" class="edit-button">Edit</button>
          <button onclick="deleteStudent(${student.id})" class="delete-button">Delete</button>
        </div>
      `;
    }
  }

  // Callback to add student card
  addStudentCard(student: Student) {
    const imageUrl = student.photo || 'https://via.placeholder.com/150';
    const studentCardHtml = `
      <div id="student-card-${student.id}" class="student-card">
        <img src="${imageUrl}" alt="${student.name}" />
        <div class="student-info">
          <h3>${student.name}</h3>
          <p>Email: ${student.email}</p>
          <p>Phone: ${student.phone}</p>
          <button onclick="editStudent(${student.id})" class="edit-button">Edit</button>
          <button onclick="deleteStudent(${student.id})" class="delete-button">Delete</button>
        </div>
      </div>`;

    const studentList = document.querySelector('.student-list');
    if (studentList) {
      studentList.innerHTML += studentCardHtml;
    }
  }
}