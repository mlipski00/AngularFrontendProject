import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { reject, isRejected } from 'q';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersURL: string = 'http://mlipski.site:8080/Workshop3WS/webapi/user';
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(
    private http: HttpClient,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL);
  }

  addUser(user: User) {
    console.log(user);
    return new Promise((resolve, reject) => {
      this.http.post<User>(this.usersURL, user, httpOptions)
      .toPromise()
      .then(resolve => {
        this.flashMessage.show('New client added', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/'])
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
        this.router.navigate(['/'])
      });    
  })
  }




}
