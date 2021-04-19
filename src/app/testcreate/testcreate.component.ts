import { Component, OnInit } from '@angular/core';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AddQuestionComponent } from 'src/app/add-question/add-question.component';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../Services/user-details.service';
import { TestService } from '../Services/test.service';
import { Test } from '../Models/test';
import { Testquestions } from '../Models/testquestions';
import { Question } from '../Models/question';
import { QuestionService } from '../Services/question.service';
@Component({
  selector: 'app-testcreate',
  templateUrl: './testcreate.component.html',
  styleUrls: ['./testcreate.component.css']
})
export class TestcreateComponent implements OnInit {
  isEnabled: boolean = true;
  isShown: boolean = false;
  questions = [];
  selectedItemsList = [];
  checkedIDs = [];
  id: number = this.userDetails.UserDetails.id;
  constructor(private testService: TestService, private _router: Router, private userDetails: UserDetailsService, private route: ActivatedRoute, private questionService: QuestionService) { }
  objTestDetails: Test = {
    testId: 0,
    testName: '',
    duration: '',
    scheduleFrom: null,
    scheduleTo: null,
    createdBy: this.userDetails.UserDetails.id,
  }
  objTestQuestions: Testquestions = {
    id: 0,
    testId: 0,
    questionId: 0,
  }
  getQuestions() {

    this.questionService.getQuestion(this.userDetails.UserDetails.id).subscribe((data) => {
      this.questions = data;
      console.log(this.questions);
    }, (error: any) => {
      console.log(error);
    })
  }
  save() {
    this.testService.insertTestDetails(this.objTestDetails).subscribe((data) => {
      this.testService.TestDetails = data;
      debugger
      for (let index = 0; index < this.checkedIDs.length; index++) {
        this.objTestQuestions.questionId = this.checkedIDs[index];
        this.objTestQuestions.testId = this.testService.TestDetails.testId;
        this.testService.insertTestQuestions(this.objTestQuestions).subscribe((data) => {
          console.log(data);
        });

      }
    });
  }
  changeSelection() {
    this.fetchCheckedIDs()
  }

  /*fetchSelectedItems() {
    debugger
    this.selectedItemsList = this.questions => {
      return value.isChecked
      
    });
  }*/
  fetchCheckedIDs() {
    
    this.checkedIDs = []
    this.questions.forEach((value) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }
  schedule(){
    this.isEnabled = false; 
    }
  ngOnInit(): void {
    this.getQuestions()
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.testService.getTestById(this.id).subscribe((data) => {

        this.objTestDetails = data;
        console.log(this.objTestDetails);
      }, (error: any) => {
        console.log(error);
      });
    }
  }

}
