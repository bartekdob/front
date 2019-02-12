import {Injectable} from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {HttpEvent} from '../../../node_modules/@angular/common/http/src/response';
import {catchError, map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import {doesNotThrow} from 'assert';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token: string = localStorage.getItem('token');
    if (token != null) {
      authReq = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
    }

    return next.handle(authReq).pipe(catchError(err => {
      if (err.status === 401) {
        this.authService.logout();
      }
      const error = err.error.message || err.statusText;
      window.alert(error);
      //return doesNotThrow(err);
      return throwError(error);
    }));

  }
}
