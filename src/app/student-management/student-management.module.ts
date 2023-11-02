import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListSubsComponent } from '../student-list-subs/student-list-subs.component'; // Import FormsModule

import { StudentDetailComponent } from '../pages/student-detail/student-detail.component';
import { StudentListObsComponent } from '../student-list-obs/student-list-obs.component';



@NgModule({
  declarations: [
    StudentListSubsComponent,
    StudentDetailComponent,
    StudentListObsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentListSubsComponent,
    StudentDetailComponent,
    StudentListObsComponent,

  ]
})
export class StudentManagementModule { }
