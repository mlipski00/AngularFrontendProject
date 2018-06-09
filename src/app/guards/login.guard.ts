import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Observable } from 'rxjs';

@Injectable()

export class LoginGuard implements CanActivate {

    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }

    canActivate(): boolean {
        console.log(this.loginService.isLogged())
        if (this.loginService.isLogged()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}