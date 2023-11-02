import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../navbar/navbar.component';
import { AboutScreenComponent } from '../pages/about-screen/about-screen.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';


import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NavbarComponent,
    AboutScreenComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule

  ],
  exports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    AboutScreenComponent,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  
  ]

})
export class SharedModule { }
