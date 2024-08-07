import { Student } from "../models/student";
import { StudentService } from "../services/studentService";

export class StudentForm {
  private studentService: StudentService; // Service for handling student data operations
  private studentId?: number; // Optional student ID for editing an existing student
  private callback: (student: Student) => void; // Callback function to be executed after form submission
  private container?: HTMLElement; // Optional container element for the form

  constructor(
    studentService: StudentService,
    studentId?: number,
    callback: (student: Student) => void = () => { },
    container?: HTMLElement
  ) {
    this.studentService = studentService;
    this.studentId = studentId;
    this.callback = callback;
    this.container = container;
  }

  // Method to render the form
  async render() {
    const student = this.studentId ? await this.studentService.getStudent(this.studentId) : null;

    // HTML structure for the form
    let formHtml = `
      <form id="studentForm">
        <input type="text" id="name" placeholder="Name" required value="${student?.name || ''}" />
        <input type="email" id="email" placeholder="Email" required value="${student?.email || ''}" />
        <input type="text" id="phone" placeholder="Phone" required value="${student?.phone || ''}" />
        <button type="submit">${this.studentId ? 'Update' : 'Add'} Student</button>
      </form>
    `;

    // Rendering the form in the specified container or creating a new container
    if (this.container) {
      this.container.innerHTML = formHtml;
    } else {
      const existingFormContainer = document.getElementById('formContainer');
      if (existingFormContainer) {
        existingFormContainer.innerHTML = formHtml;
      } else {
        const newFormContainer = document.createElement('div');
        newFormContainer.id = 'formContainer';
        newFormContainer.innerHTML = formHtml;
        document.body.appendChild(newFormContainer);
      }
    }

    // Adding an event listener to handle form submission
    const form = document.getElementById('studentForm') as HTMLFormElement;
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;

      try {
        const student: Student = { id: this.studentId || 0, name, email, phone };
        if (this.studentId) {
          await this.studentService.updateStudent(this.studentId, student);
          alert('Student updated successfully');
        } else {
          const newStudent = await this.studentService.createStudent(student);
          alert('Student added successfully');
          student.id = newStudent.id; // Ensure the new student has the correct ID
        }

        // Execute the callback function if provided
        if (this.callback) {
          this.callback(student);
        }

        // Clear the form or remove the form container
        if (this.container) {
          this.container.innerHTML = '';
        } else {
          document.getElementById('formContainer')?.remove();
        }
      } catch (error) {
        alert(`Error: ${error}`);
      }
    });
  }
}
