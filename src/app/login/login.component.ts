import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../Models/registration';
import { LoginService } from '../Services/login.service';
import { UserDetailsService } from '../Services/user-details.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private loginService: LoginService, private userDetailsService: UserDetailsService) { }
  objLogin: Registration = {
    id: 0,
    email: '',
    name: '',
    password: '',
    role: ''
  }
  ngOnInit(): void {
  }
  checkLogin() {
    console.log("Click")
    this.loginService.checkLoginDetails(this.objLogin).subscribe((data) => {
      this.userDetailsService.UserDetails = data;
      if(this.userDetailsService.UserDetails.role == "Teacher"){
        this._router.navigate(["dashboard"]);
      }
      else if(this.userDetailsService.UserDetails.role == "Student"){
        this._router.navigate(["studentDashboard"]);
      }
      else{

      }
      
    });
  }
}
