import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIBaseURL } from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../Models/result';
@Injectable({
  providedIn: 'root'
})
export class ResultService {
  getResultByIdURL = APIBaseURL + 'ResultMasters';
  insertResultDetailsURL = APIBaseURL + 'ResultMasters';

  constructor(private httpClient: HttpClient) { }

  getResultById(TestId: number,StudentId: number): Observable<any>{
    return this.httpClient.get<any>(this.getResultByIdURL + '/' + TestId + '/' + StudentId, {
      responseType: 'json'
    })
  }

  insertTestDetails(objResultDetails: Result): Observable<Result> {
    return this.httpClient.post<Result>(this.insertResultDetailsURL, objResultDetails, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
}
