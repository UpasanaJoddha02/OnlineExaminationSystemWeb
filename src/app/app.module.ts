import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TestcreateComponent } from './testcreate/testcreate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddQuestionComponent } from './add-question/add-question.component';
import { NgxEditorModule } from 'ngx-editor';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TestquestionsComponent } from './testquestions/testquestions.component';
import { AddoptionsComponent } from './addoptions/addoptions.component';
import { QuestionbankComponent } from './questionbank/questionbank.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { StudentNewtestComponent } from './student-newtest/student-newtest.component';
import { TestlistComponent } from './testlist/testlist.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    TestcreateComponent,
    AddQuestionComponent,
    TestquestionsComponent,
    AddoptionsComponent,
    QuestionbankComponent,
    StudentDashboardComponent,
    NewquestionComponent,
    StudentNewtestComponent,
    TestlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxEditorModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
