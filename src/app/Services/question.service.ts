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
  updateQuestionURL = APIBaseURL + 'QuestionMasters';
  getQuestionURL = APIBaseURL + 'QuestionMasters/' + 'GetQuestions';
  deleteQuestionURL = APIBaseURL + 'QuestionMasters';
  getQuestionByIdURL = APIBaseURL + 'QuestionMasters';
  constructor(private httpClient: HttpClient) { }
  QuestionDetails: Question;

  insertQuestionDetails(objquestion: Question): Observable<Question> {
    return this.httpClient.post<Question>(this.insertQuestionURL, objquestion, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  updateQuestionDetails(objquestion: Question): Observable<Question> {
    return this.httpClient.put<Question>(this.updateQuestionURL  + '/' + objquestion.id, objquestion, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }
  getQuestion(createdby: number): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.getQuestionURL + '/' + createdby, {
      responseType: 'json'

    })
  }
  getQuestionById(id: number): Observable<Question>{
    return this.httpClient.get<Question>(this.getQuestionByIdURL + '/' + id, {
      responseType: 'json'
    })
  }
  deleteQuestion(questionId: number): Observable<Question> {
    return this.httpClient.delete<Question>(this.deleteQuestionURL + '/' + questionId, {
      responseType: 'json'
    })
  }
}
