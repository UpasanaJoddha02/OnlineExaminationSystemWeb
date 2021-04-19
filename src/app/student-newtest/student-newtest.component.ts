import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../Services/user-details.service';
import { TestService } from '../Services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-newtest',
  templateUrl: './student-newtest.component.html',
  styleUrls: ['./student-newtest.component.css']
})
export class StudentNewtestComponent implements OnInit {

TestId: number;

  constructor(private _router: Router,private userDetails: UserDetailsService,private TestService: TestService) { }
  //studentId: number = this.userDetails.UserDetails.id;
  name: string = this.userDetails.UserDetails.name;

  /*next(testid: number){
    this.TestId = testid
    
      this._router.navigate(["viewtest/{{testid}}"]);
    
    
  }*/
  ngOnInit(): void {
  }

}
