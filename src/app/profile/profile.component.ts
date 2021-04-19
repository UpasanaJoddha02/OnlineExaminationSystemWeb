import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../Services/user-details.service';
import { Registration } from '../Models/registration';
import { RegistrationService } from '../Services/registration.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isDisabled:boolean = true;
  
  constructor(private userDetailsService: UserDetailsService,private registrationService: RegistrationService) { }

  name: string = this.userDetailsService.UserDetails.name;
  role: string = this.userDetailsService.UserDetails.role;
  //email: string = this.userDetailsService.UserDetails.email;
  //password: string = this.userDetailsService.UserDetails.password;
  id: number = this.userDetailsService.UserDetails.id;

  objprofileinfo: Registration = {
    id: this.userDetailsService.UserDetails.id,
    name: '',
    email: '',
    role: '',
    password: '',
  }

  ngOnInit(): void {
    this.registrationService.getRegistrationById(this.id).subscribe((data) => {
      this.objprofileinfo = data;
      console.log(this.objprofileinfo);
    }, (error: any) => {
      console.log(error);
    });
  }
  
  enable(){
    this.isDisabled = false
 }
save(){
  debugger
this.registrationService.updateRegistrationDetails(this.objprofileinfo).subscribe((data) => {
  console.log(data);
});
 }
}
