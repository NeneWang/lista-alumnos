import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-screen',
  templateUrl: './courses-screen.component.html',
  styleUrls: ['./courses-screen.component.scss']
})
export class CoursesScreenComponent {


  exampleCourses: Course[] = [
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


  onCourseAdded(course: Course) {
    this.exampleCourses.unshift(course);
  }

  editCourse(course: Course) {
    console.log('Editing course:', course);
  }

  deleteCourse(course: Course) {
    const index = this.exampleCourses.indexOf(course);
    if (index !== -1) {
      this.exampleCourses.splice(index, 1);
    }
  }

}


interface Course {
  name: string;
  major: string;
  course_number: string;
  credits: number;
  description: string;
}