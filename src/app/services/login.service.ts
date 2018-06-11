import { Injectable, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavbarComponent } from '../components/navbar/navbar.component';
import {} from 'cookie'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // userLogin: string = '06082018@wp.pl';
  // userPassword: string = 'password'
  // base64: string = "MDYwODIwMThAd3AucGw6cGFzc3dvcmQ";
  userLogin: string;
  userPassword: string;
  loginURL: string = 'http://mlipski.site:8080/Workshop3WS/webapi/secured/login';
  base64: string;
  encoded: string;
  httpOptions: any;
  isUserLogged: boolean = false;
  @Input() isLoggedEmiterBack: boolean;
  @Output() isLoggedEmiter: EventEmitter<boolean> = new EventEmitter();  

  constructor(
    private http: HttpClient,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) { 
    if(localStorage.getItem('isUserLogged') != null) {
      this.isUserLogged = JSON.parse(localStorage.getItem('isUserLogged'));
    }
  }

  getIsUserLogged(): boolean {
    return this.isUserLogged;
  }

  changeIsUserLogged(isUserLogged: boolean, userLogin: String) {
    localStorage.setItem('isUserLogged', JSON.stringify(isUserLogged));
    localStorage.setItem('currentUserLogged', JSON.stringify(userLogin));
  }

  encodeUserCredentialsAndLogin(userLogin, userPassword) {
    this.userLogin = userLogin;
    this.userPassword = userPassword;
    console.log(this.userLogin);
    console.log(this.userPassword);
    this.base64 = this.userLogin + ':' + this.userPassword
    this.encoded = btoa(this.base64);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + this.encoded
      })
    }
    this.login();
  }

  isLoggedService(): boolean {
    return this.isUserLogged;
  }
  login() {
    console.log(this.httpOptions);
    console.log(this.encoded);
    return new Promise((resolve, reject) => {
      this.http.post<String>(this.loginURL, "", this.httpOptions)
        .toPromise()
        .then(resolve => {
          this.flashMessage.show('Login successed', {
            cssClass: 'alert-success', timeout: 5000
          });
          console.log("udało się")
          this.isUserLogged = true;
          this.changeIsUserLogged(this.isUserLogged, this.userLogin);
          this.router.navigate(['/']);
          location.reload();
        })
        .catch(err => {
          this.flashMessage.show("Incorect login or password", {
            cssClass: 'alert-danger', timeout: 5000
          });
          console.log(err.message)
        })
    }
    );
  }
}
