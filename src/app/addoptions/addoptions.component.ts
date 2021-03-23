import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-addoptions',
  templateUrl: './addoptions.component.html',
  styleUrls: ['./addoptions.component.css']
})
export class AddoptionsComponent implements OnInit {
  
  reference: any;
  index: number;
  constructor() { }

  ngOnInit(): void {
    
  }
  removeoption() {
    this.reference.destroy();
  }
}
