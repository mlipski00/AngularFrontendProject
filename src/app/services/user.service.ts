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
  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.usersURL + `/${id}`);
  }

  addUser(user: User) {
    console.log(user);
    return new Promise((resolve, reject) => {
      this.http.post<User>(this.usersURL, user, httpOptions)
      .toPromise()
      .then(resolve => {
        this.flashMessage.show('New user added', {
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

  updateUser(user: User) {
    console.log(user);
    return new Promise((resolve, reject) => {
      this.http.put<User>(this.usersURL + `/${user.id}`, user, httpOptions)
      .toPromise()
      .then(resolve => {
        this.flashMessage.show('User updated', {
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
  deleteUser(user: User | number) {
    const id = typeof user === 'number' ? user : user.id;
    return new Promise((resolve, reject) => {
      this.http.delete<User>(this.usersURL + `/${id}`, httpOptions)
      .toPromise()
      .then(() => {
        this.flashMessage.show('User ID '+ id +' deleted', {
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
