import { Component, ViewChild } from '@angular/core';
import { StudentListComponent } from 'src/app/student-list/student-list.component';

@Component({
  selector: 'app-students-screen',
  templateUrl: './students-screen.component.html',
  styleUrls: ['./students-screen.component.scss']
})

export class StudentsScreenComponent {

  title = 'lista-alumnos';

  students: Student[] = [];

  selectedStudent?: Student = {
    "name": "Michael",
    "lastName": "Johnson",
    "average": "7.5",
    "major": "History",
    "minor": "Political Science",
    "credits": "75"
  };
//  @ViewChild('childRef', { static: false }) childComponent: ChildComponent;

  

  @ViewChild('studentList', { static: false }) studentList: StudentListComponent | undefined;

  onStudentAdded(student: Student) {
    this.students = [student, ...this.students];
    console.log("New len of sutdnets", this.students.length)
    this.studentList?.addStudent();
  }

  editStudent(student: Student) {
    // TODO
    console.log('Editing student:', student);

  }

  deleteStudent(student: Student) {
    // TODO 
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}



interface Student {
  name: string;
  lastName: string;
  average: string;
  major: string;
  minor: string;
  credits: string;
}