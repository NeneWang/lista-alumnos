import { Injectable } from '@angular/core';
import { Observable, Subject, delay, of } from 'rxjs';
export interface Course {
  name: string;
  major: string;
  course_number: string;
  credits: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  courses: Course[] = [
    {
      'name': 'Introduction to Computer Science',
      'major': 'Computer Science',
      'course_number': 'CS101',
      'credits': 4,
      'description': 'This course introduces students to the fundamentals of computer science and programming.'
    },
    {
      'name': 'Introduction to Biology',
      'major': 'Biology',
      'course_number': 'BIO101',
      'credits': 4,
      'description': 'This course introduces students to the fundamentals of biology and the scientific method.'
    }

  ]


  private coursesSubject: Subject<Course[]> = new Subject<Course[]>();

  getCourses() {
    return of(this.courses).pipe(delay(500));
  }

  
  getCourseChanges(): Observable<Course[]> {
    return this.coursesSubject.asObservable();
  }

  addCourse(course: Course) {
    this.courses.unshift(course);
  }

  deleteCourse(course: Course) {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }

  generateRandomCourse() {
    const course: Course = {
      'name': 'Random Course',
      'major': 'Random Major',
      'course_number': 'CS' + Math.round(Math.random() * 1000),
      'credits': Math.round(Math.random() * 4),
      'description': 'This course introduces students to the fundamentals of computer science and programming.'
    }
    this.courses.unshift(course);
  }


}
