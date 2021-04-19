import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIBaseURL } from '../config';
import { Test } from '../Models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  getTestURL = APIBaseURL + 'TestMasters/' + 'GetTests';
  getTestByIdURL = APIBaseURL + 'TestMasters';
  insertTestDetailsURL = APIBaseURL + 'TestMasters';
  insertTestQuestionsURl = APIBaseURL + 'TestQuestionMappings';
  


  constructor(private httpClient: HttpClient) { }
  TestDetails: Test;
  
  getTests(createdby: number): Observable<Test[]> {
    return this.httpClient.get<Test[]>(this.getTestURL + '/' + createdby, {
      responseType: 'json'

    })
  }
  getTestById(id: number): Observable<Test>{
    return this.httpClient.get<Test>(this.getTestByIdURL + '/' + id, {
      responseType: 'json'
    })
  }

  insertTestDetails(objTestDetails: Test): Observable<Test> {
    return this.httpClient.post<Test>(this.insertTestDetailsURL, objTestDetails, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  insertTestQuestions(objTestDetails: Test): Observable<Test> {
    return this.httpClient.post<Test>(this.insertTestQuestionsURl, objTestDetails, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
}
