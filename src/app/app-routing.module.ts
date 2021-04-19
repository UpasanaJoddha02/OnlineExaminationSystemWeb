import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddoptionsComponent } from './addoptions/addoptions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayresultComponent } from './displayresult/displayresult.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionbankComponent } from './questionbank/questionbank.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentNewtestComponent } from './student-newtest/student-newtest.component';
import { TestcreateComponent } from './testcreate/testcreate.component';
import { TestlistComponent } from './testlist/testlist.component';
import { ViewTestComponent } from './view-test/view-test.component';



const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'testcreate', component: TestcreateComponent },
  { path: 'addQuestion', component: AddQuestionComponent },
  { path: 'addoptions', component: AddoptionsComponent },
  { path: 'questionbank', component: QuestionbankComponent },
  { path: 'studentDashboard', component: StudentDashboardComponent },
  { path: 'newquestion', component: NewquestionComponent },
  { path: 'editquestion/:id', component: NewquestionComponent },
  { path: 'studentNewtest', component: StudentNewtestComponent },
  { path: 'testlist', component: TestlistComponent },
  { path: 'edittest/:id', component: TestcreateComponent },
  { path: 'viewtest/:id', component: ViewTestComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'displayresult/:TestId', component: DisplayresultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
