
import { Component } from '@angular/core';
import { Student, StudentsService } from '../students.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list-obs',
  templateUrl: './student-list-obs.component.html',
  styleUrls: ['./student-list-obs.component.scss']
})
export class StudentListObsComponent {

  students$: Observable<Student[]> | undefined;
  constructor(private studentsService: StudentsService) {
    this.students$ = this.studentsService.getStudents();
  }


}
