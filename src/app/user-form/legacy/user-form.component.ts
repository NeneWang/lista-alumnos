import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Student {
  name: string;
  lastName: string;
  average: string;
  major: string;
  minor: string;
  credits: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})


export class UserFormComponent {


  userForm: FormGroup;
  majors: string[] = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Biology', 'History'];
  submitMessage = 'Create';
  formTitle = 'Add Student';

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [this.student?.name ?? '', Validators.required],
      lastName: [this.student?.lastName ??'', Validators.required],
      major: [this.student?.major ?? '', Validators.required],
      minor: [this.student?.minor ?? '', [Validators.minLength(3)]],
      credits: [this.student?.credits ?? 0, Validators.required],
      average: [this.student?.average ?? 0, [Validators.required, Validators.max(10), Validators.min(0)]],

    });
    this.submitMessage = this.student ? 'Update' : 'Create';
    this.formTitle = this.student ? 'Edit Student' : 'Add Student';
  }



  @Input() student?: Student;
  @Output() studentChange: EventEmitter<Student> = new EventEmitter<Student>();

  onSubmit() {
    if (this.userForm.valid) {
      // Process the form data (e.g., send it to a server)
      console.log(this.userForm.value);
      this.studentChange.emit(this.userForm.value);
    }
  }
}
