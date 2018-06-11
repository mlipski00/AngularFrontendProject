import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private isUserLogged: boolean;
  private userLogin: String
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this. isUserLogged =  this.loginService.getIsUserLogged();
    this.userLogin = JSON.parse(localStorage.getItem('currentUserLogged'));
    console.log("czy jest zalogowany: "+ this.isUserLogged);
  }
  LogOut() {
    this.isUserLogged = false;
    this.loginService.changeIsUserLogged(this.isUserLogged, 'userLoggedOut');
  }
  toggleIsLoggedFlag() {
    this.isUserLogged = true;
    return this.isUserLogged;
  }
}

  // LogOut() { 
  //   this.isLogged = true;
  //   this.logoutService.logOutUser();
  // }
  // userIsLogged(): boolean {
  //   this.isLogged = true;
  //   console.log("czy jest zalogowany: "+ this.isLogged);
  //   return this.isLogged;
  // }

