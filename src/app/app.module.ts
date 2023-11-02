import { StudentManagementModule } from './student-management/student-management.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './user-form/user-form.component';
import { AcademicStatusPipe } from './academic-status.pipe';
import { LayoutComponent } from './components/layout/layout.component';




import { StudentsScreenComponent } from './pages/students-screen/students-screen.component';
import { CoursesScreenComponent } from './pages/courses-screen/courses-screen.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FullNamePipe } from './full-name.pipe';
import { Font20Directive } from './font20.directive';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component';

// import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    UserFormComponent,
    AcademicStatusPipe,
    LayoutComponent,
    StudentsScreenComponent,
    CoursesScreenComponent,
    HomeScreenComponent,
    StudentListComponent,
    CourseFormComponent,
    CourseListComponent,
    SidebarComponent,
    FullNamePipe,
    Font20Directive,
    UserEditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    CoreModule,
    StudentManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
