import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListSubsComponent } from './student-list-subs.component';

describe('StudentListSubsComponent', () => {
  let component: StudentListSubsComponent;
  let fixture: ComponentFixture<StudentListSubsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListSubsComponent]
    });
    fixture = TestBed.createComponent(StudentListSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
