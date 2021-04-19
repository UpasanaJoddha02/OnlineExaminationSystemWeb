import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../Services/user-details.service';
import { ResultService } from '../Services/result.service';
@Component({
  selector: 'app-student-history',
  templateUrl: './student-history.component.html',
  styleUrls: ['./student-history.component.css']
})
export class StudentHistoryComponent implements OnInit {
resultList=[];
  constructor(private userDetailsService: UserDetailsService,private resultService: ResultService) { }
  Studentid: number = 0;
  name: string = this.userDetailsService.UserDetails.name;
  ngOnInit(): void {
    this.Studentid = this.userDetailsService.UserDetails.id;
    this.resultService.getResultListById(this.Studentid).subscribe((data) => {
      this.resultList = data;
      console.log(this.resultList);
    }, (error: any) => {
      console.log(error);
    });
  }

}
