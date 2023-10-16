// student-list.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  @Input() students: any[] = [];
  @Output() editStudentEvent = new EventEmitter<any>();
  @Output() deleteStudentEvent = new EventEmitter<any>();

  displayedColumns: string[] = ['name', 'actions'];

  editStudent(student: any) {
    this.editStudentEvent.emit(student);
  }

  deleteStudent(student: any) {
    this.deleteStudentEvent.emit(student);
  }
}
