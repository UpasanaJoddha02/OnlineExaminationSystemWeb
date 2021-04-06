import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';
import { UserDetailsService } from '../Services/user-details.service';
@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {
  tests = [];
  constructor(private testService: TestService, private userDetailsService: UserDetailsService) { }

  gettests() {
    this.testService.getTests(this.userDetailsService.UserDetails.id).subscribe((data) => {
      this.tests = data;
      console.log(this.tests);
    }, (error: any) => {
      console.log(error);
    })
  }
  ngOnInit(): void {
    this.gettests()
  }

}
