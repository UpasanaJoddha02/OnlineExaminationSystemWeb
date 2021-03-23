import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AddoptionsComponent} from 'src/app/addoptions/addoptions.component'
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit,OnDestroy{
  @ViewChild('optionsContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  editor: Editor;
  html: '';
  reference: any;
  index: number;
  rowId: number;
  embeddedViews: number = 0;
  selectedSkill: string;
  yearsOfExperiences: string = '0';
  selectedRating: string;
  htmlContent: string;
  skills: any = [];
  ratings: any = [];
  constructor(private comFacResolver: ComponentFactoryResolver) { }
  removeSkills() {
    this.reference.destroy();
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  addoptions(){
    let rows = document.getElementById("optionsContainer");
    let rowIdIndex = rows.innerHTML.indexOf("row");
    if (rowIdIndex == -1) {
      this.rowId = 1;
    }


    let comp = this.comFacResolver.resolveComponentFactory(AddoptionsComponent);
    let dynamicComp = this.container.createComponent(comp);
    dynamicComp.instance.reference = dynamicComp;

    
    dynamicComp.instance.index = this.rowId;

    

    this.rowId += 1;

    let com = this.container;
    if (com !== undefined) {
      this.embeddedViews = com['_embeddedViews'].length;
    }
  }
}
