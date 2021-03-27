import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddoptionsComponent } from './addoptions/addoptions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { QuestionbankComponent } from './questionbank/questionbank.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TestcreateComponent } from './testcreate/testcreate.component';
import { TestquestionsComponent } from './testquestions/testquestions.component';


const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'testcreate', component: TestcreateComponent },
  { path: 'addQuestion', component: AddQuestionComponent },
  { path: 'testquestions', component: TestquestionsComponent },
  { path: 'addoptions', component: AddoptionsComponent },
  { path: 'questionbank', component: QuestionbankComponent },
  { path: 'studentDashboard', component: StudentDashboardComponent },
  { path: 'newquestion', component: NewquestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
