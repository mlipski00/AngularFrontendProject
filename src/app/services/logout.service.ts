import { Injectable } from '@angular/core';
import { LoginService } from './../services/login.service';
import { LoginComponent } from './../components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private isLogged: boolean;

  constructor(
    private loginService: LoginService,

  ) { }

  logOutUser() {
    this.isLogged = false;
  }
}
