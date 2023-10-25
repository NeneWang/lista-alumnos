import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListObsComponent } from './student-list-obs.component';

describe('StudentListObsComponent', () => {
  let component: StudentListObsComponent;
  let fixture: ComponentFixture<StudentListObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListObsComponent]
    });
    fixture = TestBed.createComponent(StudentListObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
