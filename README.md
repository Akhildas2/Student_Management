# Student Management System

A simple application for managing student data. This project includes functionalities to list, add, edit, and delete student records.

## Features

- **List Students**: View all students with their details.
- **Add Student**: Add a new student with name, email, and phone number.
- **Edit Student**: Update the details of an existing student.
- **Delete Student**: Remove a student from the list.

## Technologies Used

- **Frontend**: TypeScript, HTML, CSS
- **Backend API**: JSONPlaceholder (for demo purposes)
- **Tools**: Axios for HTTP requests

## Project Structure

```sh
Todo Student_management
│
├── public
│└── favicon.ico
│
├── src
│ │
│ ├── api
│ │ └── studentApi.ts
│ ├── components
│ │ ├── studentForm.ts
│ │ └── studentList.ts
│ │
│ ├── css
│ │ └── style.css
│ │
│ ├── models
│ │ └── student.ts
│ │
│ ├── services
│ │ └── studentService.ts
│ │
│ └── main.ts
│ │
│ └──vite-env.d.ts
│
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## File Descriptions

- **`studentList.ts`** - Handles rendering the list of students.
- **`studentForm.ts`** - Provides a form for adding or editing student details.
- **`student.ts`** - Defines the Student interface.
- **`studentService.ts`** - Provides methods to interact with the student API.
- **`studentApi.ts`** - Contains methods for making API requests.
- **`style.css`** - Contains styles for the application.
- **`main.ts`** - Entry point for the application.

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Akhildas2/Student_Management.git
   ```

2. Navigate to the project directory:
   ```sh
   cd Student_Management
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

1. Open the application in your browser:
   ```sh
   http://localhost:5173/
   ```
2. Use the "Add New Student" button to open the form for adding a new student.
3. Click "Edit" to modify existing student details.
4. Click "Delete" to remove a student.

## Contributing

Feel free to submit issues or pull requests. Please follow the project's coding style and conventions.