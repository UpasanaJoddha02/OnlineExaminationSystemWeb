import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';
import { QuestionService } from '../Services/question.service';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../Services/answer.service';
import { UserDetailsService } from '../Services/user-details.service';
import { Answer } from '../Models/answer';
import { Router } from '@angular/router';
//import {StudentNewtestComponent} from '../student-newtest/student-newtest.component'
@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent implements OnInit {
  Testid: number = 0;
  questions=[];
 
  objAnswerdetails: Answer = {
    id: 0,
    testId: 0,
    questionId: 0,
    studentId: this.userDetailsService.UserDetails.id,
    selectedAnswer:'',
  }
  constructor(private _router: Router,private userDetailsService: UserDetailsService,private questionService: QuestionService,private answerService: AnswerService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Testid = parseInt(this.route.snapshot.params['id']);
    if (this.Testid > 0) {
    this.questionService.getQuestionsByTestId(this.Testid).subscribe((data) => {
      
      this.questions = data;
      this.questions.forEach(element => {
        element.SelectedAnswer = "";
      });
      console.log(this.questions);
    }, (error: any) => {
      console.log(error);
    })
  }
  }

save(){
  debugger
  this.objAnswerdetails.testId = this.Testid;
  for (let index = 0; index < this.questions.length; index++) {
    this.objAnswerdetails.questionId = this.questions[index].id;
    this.objAnswerdetails.selectedAnswer = this.questions[index].SelectedAnswer;
    this.answerService.insertAnswerDetails(this.objAnswerdetails).subscribe((data) => {
      console.log(data);
    });

  }
  
}
next(){
  this._router.navigate(["displayresult",this.Testid]);
}
}
