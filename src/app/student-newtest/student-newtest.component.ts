import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../Services/user-details.service';

@Component({
  selector: 'app-student-newtest',
  templateUrl: './student-newtest.component.html',
  styleUrls: ['./student-newtest.component.css']
})
export class StudentNewtestComponent implements OnInit {

  constructor(private userDetails: UserDetailsService) { }
  
  ngOnInit(): void {
  }

}
