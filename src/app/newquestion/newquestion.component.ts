import { ParsedEvent } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { Question } from '../Models/question';
import { QuestionService } from '../Services/question.service';
import { UserDetailsService } from '../Services/user-details.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {
  editor: Editor;
  html: '';
  constructor(private _router: Router,private questionService: QuestionService,private userDetailsService: UserDetailsService, private route: ActivatedRoute) { }
  objQuestion: Question = {
    id: 0,
    question: '',
    type: '',
    answer: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    marks: 0,
    createdby: this.userDetailsService.UserDetails.id
  }
  qType = ['Multiple Choice Question','Free Text'];
  ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  id: number = 0;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.questionService.getQuestionById(this.id).subscribe((data) => {
        this.objQuestion = data;
        console.log(this.objQuestion);
      }, (error: any) => {
        console.log(error);
      });
    }
  }
  insertQuestion() {
    this.objQuestion.marks = parseInt(this.objQuestion.marks.toString());
    this.questionService.insertQuestionDetails(this.objQuestion).subscribe((data) => {
      console.log(data);
      this._router.navigate(["questionbank"]);
    });
  }
  updateQuestion() {
    this.objQuestion.marks = parseInt(this.objQuestion.marks.toString());
    this.questionService.updateQuestionDetails(this.objQuestion).subscribe((data) => {
      console.log(data);
      this._router.navigate(["questionbank"]);
    });
  }
}
