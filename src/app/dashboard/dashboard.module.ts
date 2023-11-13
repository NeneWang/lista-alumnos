import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardHomeComponent,
  },
  {
    path: 'home',
    component: HomeScreenComponent
  },
  {
    path: 'not-allowed',
    component: NotAllowedComponent
  },
  {
    path: '**',
    // canActivate: [AuthGuard], // Add AuthGuard here as well
    component: NotAllowedComponent, // Redirect to NotAllowedComponent when route is not matched
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    NotAllowedComponent
  ],
})
export class DashboardModule { }


/**
 * 
    // children: [
    //   { path: 'child-route-1', component: ChildRoute1Component },
    //   { path: 'child-route-2', component: ChildRoute2Component },
    //   // Add more child routes as needed
    // ],
 */