
import './css/style.css';
import { StudentService } from './services/studentService';
import { StudentList } from './components/studentList';

const studentService = new StudentService();
const studentList = new StudentList(studentService);

document.addEventListener('DOMContentLoaded', () => {
  studentList.render();
});
