import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIBaseURL } from '../config';
import { Answer } from '../Models/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  insertAnswerURL = APIBaseURL + 'AnswerMasters';
  constructor(private httpClient: HttpClient) { }

  insertAnswerDetails(objAnswerdetails: Answer): Observable<Answer> {
    return this.httpClient.post<Answer>(this.insertAnswerURL, objAnswerdetails, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
}
