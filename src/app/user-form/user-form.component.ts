import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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


export class UserFormComponent implements OnInit{

  
  userForm: FormGroup;
  majors: string[] = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Biology', 'History'];


  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      major: ['', Validators.required],
      minor: [''],
      credits: [0],
      average: [0],

    });
  }

  ngOnInit(): void {

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
