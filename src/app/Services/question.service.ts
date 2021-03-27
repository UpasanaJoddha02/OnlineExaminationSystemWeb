import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIBaseURL } from '../config';
import { Question } from '../Models/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  insertQuestionURL = APIBaseURL + 'QuestionMasters';
  getQuestionURL = APIBaseURL + 'QuestionMasters';
  
  constructor(private httpClient: HttpClient) { }

  insertQuestionDetails(objquestion: Question): Observable<Question> {
    return this.httpClient.post<Question>(this.insertQuestionURL, objquestion, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    
  }
  getQuestion(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.getQuestionURL, {
      responseType: 'json'
    })
  }
}
