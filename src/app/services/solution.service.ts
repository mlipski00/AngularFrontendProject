import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from './../models/Solution';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  solutionURL: string = 'http://mlipski.site:8080/Workshop3WS/webapi/solution';
  solutions: Observable<Solution[]>;
  solutionsByUser: Observable<Solution[]>;

  constructor(private http: HttpClient) { }

  getSolution(userID): Observable<Solution[]> {
    return  this.http.get<Solution[]>(this.solutionURL + `/user/${userID}`);
  }
}
