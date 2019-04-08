import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import{MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { from } from 'rxjs';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentComponent } from './components/student/student.component';

const routes:Routes = [
  {path: 'create',component: CreateComponent},
  {path: 'signin',component: SigninComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'student',component: StudentComponent},
  {path: 'list',component: ListComponent},
  {path: '',redirectTo: 'signin',pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    SigninComponent,
    SignupComponent,
    StudentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
