// student-list.component.ts

import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
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

  displayedColumns: string[] = ['name', 'average', 'major', 'minor', 'actions'];
  dataSource: MatTableDataSource<Student>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.students);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['students'] && changes['students'].currentValue) {
      this.dataSource = new MatTableDataSource(this.students);
    }
  }

  editStudent(student: Student) {
    this.editStudentEvent.emit(student);
    this.dataSource._updateChangeSubscription();
  }

  deleteStudent(student: Student) {


    this.deleteStudentEvent.emit(student);
    this.dataSource._updateChangeSubscription();
  }
}



interface Student {
  name: string;
  average: string;
  major: string;
  minor: string;
  credits: string;
}