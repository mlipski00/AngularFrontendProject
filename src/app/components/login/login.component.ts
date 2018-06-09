import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: string;
  userPassword: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
  }
  onSubmit() {
    this.loginService.encodeUserCredentialsAndLogin(this.userLogin, this.userPassword);
  }
}
