import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIBaseURL } from '../config';
import { Registration } from '../Models/registration';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  checkLoginURL = APIBaseURL + 'Registrations/' + 'CheckLogin';
  constructor(private httpClient: HttpClient) { }

  checkLoginDetails(registration: Registration): Observable<any> {
    return this.httpClient.post<Registration>(this.checkLoginURL, registration, {
      responseType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
