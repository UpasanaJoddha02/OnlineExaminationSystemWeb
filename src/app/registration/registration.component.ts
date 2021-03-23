import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Registration } from '../Models/registration';
import { RegistrationService } from '../Services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }
  objRegistration: Registration = {
    id: 0,
    email: '',
    name: '',
    password: '',
    role: ''
  }
  ngOnInit(): void {
    //this.getRegistration();
  }

  getRegistration() {
    this.registrationService.getRegistrations().subscribe((data) => {
      console.log(data);
    });
  }

  insertRegistration() {
    this.registrationService.insertRegistrationDetails(this.objRegistration).subscribe((data) => {
      console.log(data);
    });
  }

}
