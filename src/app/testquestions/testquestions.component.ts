import { Component, OnInit } from '@angular/core';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {AddQuestionComponent} from 'src/app/add-question/add-question.component';
import { Question } from '../Models/question';
import { QuestionService } from '../Services/question.service';
@Component({
  selector: 'app-testquestions',
  templateUrl: './testquestions.component.html',
  styleUrls: ['./testquestions.component.css']
})
export class TestquestionsComponent implements OnInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  qType: any;
  ratings: any;
  rowId: number;
  data: string;
  embeddedViews: number = 0;
  
  constructor(private comFacResolver: ComponentFactoryResolver) { }
  
  /*insertQuestion() {
    this.questionService.insertQuestion(this.addquestion.objquestion).subscribe((data) => {
      console.log(data);
    });
  }*/
  addNewSkills() {
    let rows = document.getElementById("dynamicContainer");
    let rowIdIndex = rows.innerHTML.indexOf("row");
    if (rowIdIndex == -1) {
      this.rowId = 1;
    }

    this.qType = ['Multiple Choice Question','Free Text'];
    this.ratings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let comp = this.comFacResolver.resolveComponentFactory(AddQuestionComponent);
    let dynamicComp = this.container.createComponent(comp);
    dynamicComp.instance.reference = dynamicComp;

    dynamicComp.instance.qType = this.qType;
    dynamicComp.instance.ratings = this.ratings;
    dynamicComp.instance.index = this.rowId;

    dynamicComp.instance.selectedtype = '';
    dynamicComp.instance.yearsOfExperiences = '0';
    dynamicComp.instance.selectedRating = this.ratings[0];

    this.rowId += 1;

    let com = this.container;
    if (com !== undefined) {
      this.embeddedViews = com['_embeddedViews'].length;
    }
  }
  ngOnInit(): void {
  }

}
