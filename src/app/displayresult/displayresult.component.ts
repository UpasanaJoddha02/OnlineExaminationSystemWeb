import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../Services/user-details.service';
import { ResultService } from '../Services/result.service';
import { Result } from '../Models/result';
@Component({
  selector: 'app-displayresult',
  templateUrl: './displayresult.component.html',
  styleUrls: ['./displayresult.component.css']
})
export class DisplayresultComponent implements OnInit {
  Testid: number = 0;
  Studentid: number = 0;
  result = [];
  objResult: Result = {
    id: 0,
    testid: 0,
    studentid: this.userDetailsService.UserDetails.id,
    marks: 0
  }
  constructor(private route: ActivatedRoute,private userDetailsService: UserDetailsService,private resultService: ResultService) { }

  ngOnInit(): void {
    this.Testid = parseInt(this.route.snapshot.params['TestId']);
    this.Studentid = this.userDetailsService.UserDetails.id;
    debugger
    this.resultService.getResultById(this.Testid,this.Studentid).subscribe((data) => {
      this.result = data;
      console.log(this.result);
      this.objResult.testid = this.Testid;
    this.objResult.marks = this.result[0].totalMarks;

    this.resultService.insertTestDetails(this.objResult).subscribe((data) => {
      console.log(data);
    });
    }, (error: any) => {
      console.log(error);
    })
    /*this.objResult.testid = this.Testid;
    this.objResult.marks = this.result[0];

    this.resultService.insertTestDetails(this.objResult).subscribe((data) => {
      console.log(data);
    });*/

  }

}
