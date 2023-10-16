import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Student {
  name: string;
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


  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      major: ['', Validators.required],
      minor: ['', [Validators.minLength(3)]],
      credits: [0, Validators.required],
      average: [0, [Validators.required, Validators.max(10), Validators.min(0)]],

    });
  }

  

  // @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() studentChange: EventEmitter<Student> = new EventEmitter<Student>();

  onSubmit() {
    if (this.userForm.valid) {
      // Process the form data (e.g., send it to a server)
      console.log(this.userForm.value);
      this.studentChange.emit(this.userForm.value);
    }
  }
}
