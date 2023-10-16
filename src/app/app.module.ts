import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './user-form/user-form.component';
import { AcademicStatusPipe } from './academic-status.pipe';
import { LayoutComponent } from './components/layout/layout.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutScreenComponent } from './pages/about-screen/about-screen.component';
import { StudentsScreenComponent } from './pages/students-screen/students-screen.component';
import { CoursesScreenComponent } from './pages/courses-screen/courses-screen.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    UserFormComponent,
    AcademicStatusPipe,
    LayoutComponent,
    NavbarComponent,
    AboutScreenComponent,
    StudentsScreenComponent,
    CoursesScreenComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
