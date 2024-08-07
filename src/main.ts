import './css/style.css'; // Importing the CSS stylesheet
import { StudentService } from './services/studentService'; // Importing the StudentService class
import { StudentList } from './components/studentList'; // Importing the StudentList class

// Creating an instance of StudentService
const studentService = new StudentService();
// Creating an instance of StudentList with the studentService instance
const studentList = new StudentList(studentService);

// Adding an event listener to run when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  studentList.render(); // Rendering the student list
});
