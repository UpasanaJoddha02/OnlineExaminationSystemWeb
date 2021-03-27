import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {NewquestionComponent} from 'src/app/newquestion/newquestion.component';
import { QuestionService } from '../Services/question.service'
@Component({
  selector: 'app-questionbank',
  templateUrl: './questionbank.component.html',
  styleUrls: ['./questionbank.component.css']
})
export class QuestionbankComponent implements OnInit {
  questions = [];
  constructor(private questionService: QuestionService,private _router: Router) { }
  
  newQuestion(){
    this._router.navigate(["newquestion"]);
  }
  ngOnInit(): void {
    this.getQuestions()
  }
  getQuestions() {
    this.questionService.getQuestion().subscribe((data) => {
      this.questions = data;
      console.log(this.questions);
    }, (error: any) => {
      console.log(error);
    })
  }
}
