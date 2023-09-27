import { Component } from '@angular/core';

interface Student {
  name: string;
  average: string;
  major: string;
  minor: string;
  credits: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


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
    // Shift into studnets
    this.students.unshift(student);
  }
}
