import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersURL: string = 'http://mlipski.site:8080/Workshop3WS/webapi/user';
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.usersURL);
  }
}
