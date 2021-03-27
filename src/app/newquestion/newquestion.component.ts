import { ParsedEvent } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { Question } from '../Models/question';
import { QuestionService } from '../Services/question.service';
@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {
  editor: Editor;
  html: '';
  constructor(private questionService: QuestionService) { }
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
    createdby: 0
  }
  qType = ['Multiple Choice Question','Free Text'];
  ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit(): void {
    this.editor = new Editor();
  }
  insertQuestion() {
    this.objQuestion.marks = parseInt(this.objQuestion.marks.toString());
    this.questionService.insertQuestionDetails(this.objQuestion).subscribe((data) => {
      console.log(data);
    });
  }
}
