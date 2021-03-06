import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIBaseURL } from '../config';
import { Registration } from '../Models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  insertRegistrationURL = APIBaseURL + 'Registrations';
  getRegistrationURL = APIBaseURL + 'Registrations';
  getRegistrationByIdURL = APIBaseURL + 'Registrations';
  updateRegistrationURL = APIBaseURL + 'Registrations';

  constructor(private httpClient: HttpClient) { }

  getRegistrations(): Observable<Registration> {
    return this.httpClient.get<Registration>(this.getRegistrationURL, {
      responseType: 'json'
    })
  }
  getRegistrationById(id: number): Observable<Registration>{
    return this.httpClient.get<Registration>(this.getRegistrationByIdURL + '/' + id, {
      responseType: 'json'
    })
  }
  insertRegistrationDetails(objRegistration: Registration): Observable<Registration> {
    return this.httpClient.post<Registration>(this.insertRegistrationURL, objRegistration, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  updateRegistrationDetails(objRegistration: Registration): Observable<Registration> {
    return this.httpClient.put<Registration>(this.updateRegistrationURL  + '/' + objRegistration.id, objRegistration, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
}
