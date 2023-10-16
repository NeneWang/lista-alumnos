import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutScreenComponent }  from './pages/about-screen/about-screen.component';
import { StudentsScreenComponent } from './pages/students-screen/students-screen.component';
import { CoursesScreenComponent } from './pages/courses-screen/courses-screen.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';


const routes: Routes = [
  { path: '', component: HomeScreenComponent},
  { path: 'students', component: StudentsScreenComponent},
  { path: 'courses', component: CoursesScreenComponent},
  { path: 'about', component: AboutScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
