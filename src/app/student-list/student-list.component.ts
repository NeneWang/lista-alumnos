// student-list.component.ts

import { Component, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  @Input() students: Student[] = [];
  @Output() editStudentEvent = new EventEmitter<Student>();
  @Output() deleteStudentEvent = new EventEmitter<Student>();
  @ViewChild('averageInput') averageInput: any;

  displayedColumns: string[] = ['fullname', 'average', 'major', 'minor', 'actions'];
  majors: string[] = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Biology', 'History'];

  dataSource: MatTableDataSource<Student>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.students);
    
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if(changes['students'] && changes['students'].currentValue) {
      this.dataSource = new MatTableDataSource(this.students);
    }
  }

  addStudent() {

    this.dataSource._updateChangeSubscription();
  }
  
  editStudent(student: Student, new_average: string, new_major: string, new_minor: string) {
    console.log("Edit student", student, "With average", new_average, 
    "With major", new_major, "With minor", new_minor);

    student.average = new_average;
    student.major = new_major;
    student.minor = new_minor;
    this.editStudentEvent.emit(student);
    this.dataSource._updateChangeSubscription();
  }

  deleteStudent(student: Student) {


    this.deleteStudentEvent.emit(student);
    this.dataSource._updateChangeSubscription();
  }

  onStudentAdded(student: Student) {
    // Add the new student to the data source
    this.dataSource.data.push(student);
    this.dataSource._updateChangeSubscription(); // Manually trigger data source update
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