import { Component } from '@angular/core';

@Component({
  selector: 'app-students-screen',
  templateUrl: './students-screen.component.html',
  styleUrls: ['./students-screen.component.scss']
})

export class StudentsScreenComponent {

  title = 'lista-alumnos';
  students = [
    {
      "name": "John Doe",
      "average": "9.2",
      "major": "Computer Science",
      "minor": "Mathematics",
      "credits": "120"
    },
    {
      "name": "Jane Smith",
      "average": "8.7",
      "major": "Biology",
      "minor": "Chemistry",
      "credits": "90"
    },
    {
      "name": "Michael Johnson",
      "average": "7.5",
      "major": "History",
      "minor": "Political Science",
      "credits": "75"
    }
  ]

  onStudentAdded(student: Student) {
    this.students.unshift(student);
  }

  editStudent(student: any) {
    // TODO
    console.log('Editing student:', student);
  }

  deleteStudent(student: any) {
    // TODO 
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}



interface Student {
  name: string;
  average: string;
  major: string;
  minor: string;
  credits: string;
}