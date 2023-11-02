import { Component, ViewChild } from '@angular/core';
import { CourseListComponent } from './../../course-list/course-list.component';
import { CoursesService } from 'src/app/courses.service';


@Component({
  selector: 'app-courses-screen',
  templateUrl: './courses-screen.component.html',
  styleUrls: ['./courses-screen.component.scss']
})
export class CoursesScreenComponent {


  courses: Course[] = [

  ]

  constructor(private courseService: CoursesService) {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
  

  @ViewChild('courseList', { static: false }) courseList: CourseListComponent | undefined;

  onCourseAdded(course: Course) {
    this.courses.unshift(course);
    this.courseList?.addCourse();

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