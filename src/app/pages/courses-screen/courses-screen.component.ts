import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-screen',
  templateUrl: './courses-screen.component.html',
  styleUrls: ['./courses-screen.component.scss']
})
export class CoursesScreenComponent {


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


  onCourseAdded(course: Course) {
    this.courses.unshift(course);
  }

  editCourse(course: Course) {
    console.log('Editing course:', course);
  }

  deleteCourse(course: Course) {

    // Find where the course number matches
    
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }

    console.log('Deleting course:', course);
    console.log('Courses:', this.courses);
  }

}


interface Course {
  name: string;
  major: string;
  course_number: string;
  credits: number;
  description: string;
}