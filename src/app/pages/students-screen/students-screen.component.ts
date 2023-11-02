import { StudentsService } from './../../students.service';
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

  constructor(private studentsService: StudentsService) {
    this.studentsService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }


  @ViewChild('studentList', { static: false }) studentList: StudentListComponent | undefined;

  onStudentAdded(student: Student) {
    this.studentsService.addStudent(student);
    this.studentList?.addStudent();
    
  }

  editStudent(student: Student) {
    // TODO
    console.log('Editing student:', student);

  }

  deleteStudent(student: Student) {
    this.studentsService.deleteStudent(student); 
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