import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../models/Exercise';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
})
}
@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  exercisesURL: string = 'http://mlipski.site:8080/Workshop3WS/webapi/excercise';
  exercises: Observable<Exercise[]>

  constructor(private http: HttpClient) { }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.exercisesURL)
  }
}
