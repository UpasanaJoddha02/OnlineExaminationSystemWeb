import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../Services/user-details.service';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private userDetails: UserDetailsService) { }
  name: string = this.userDetails.UserDetails.name;
  ngOnInit(): void {
  }

}
