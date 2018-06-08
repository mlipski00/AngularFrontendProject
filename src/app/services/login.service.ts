import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic MDYwODIwMThAd3AucGw6cGFzc3dvcmQ='
  })
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  returnedValue: Observable<String>
  loginURL: string = 'http://mlipski.site:8080/Workshop3WS/webapi/secured/login';

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const cloned = req.clone( {
  //     headers: req.headers.set("Authorization", "Basic dXNlcjpwYXNzd29yZA==")
  //   });
    
  //   return next.handle(cloned);

  // }

	// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	// 	if (req.responseType == 'json') {
	// 		req = req.clone({ responseType: 'text' });

	// 		return next.handle(req).pipe(map(response => {
	// 			if (response instanceof HttpResponse) {
	// 				response = response.clone<any>({ body: JSON.parse(response.body) });
	// 			}

	// 			return response;
	// 		}));
	// 	}

	// 	return next.handle(req);
	// }
  
  constructor(
    private http: HttpClient,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) { }

  login() {
    console.log(httpOptions)
    return new Promise((resolve, reject) => {
      this.http.post<String>(this.loginURL, "", httpOptions)
        .toPromise()
        .then(resolve => {
          this.flashMessage.show('Fixed ping with basic auth header successed', {
            cssClass: 'alert-success', timeout: 10000
          });
          console.log("udało się")
        })
        .catch(err => {
          this.flashMessage.show(err.message, {
            cssClass: 'alert-danger', timeout: 10000
          });
          console.log(err.message)
        })
    }
    );
  }

}
