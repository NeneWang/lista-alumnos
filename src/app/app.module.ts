import { StudentManagementModule } from './student-management/student-management.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
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
