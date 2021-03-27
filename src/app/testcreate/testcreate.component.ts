import { Component, OnInit } from '@angular/core';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {AddQuestionComponent} from 'src/app/add-question/add-question.component';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-testcreate',
  templateUrl: './testcreate.component.html',
  styleUrls: ['./testcreate.component.css']
})
export class TestcreateComponent implements OnInit {
  
  constructor(private _router: Router) { }
  
  ngOnInit(): void {
  }

}
