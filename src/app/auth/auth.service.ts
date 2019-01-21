import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Interceptor} from '../core/app.interceptor';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'http://localhost:8080/login';



  login(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    return this.http.post(this.apiUrl, credentials).pipe();
  }

/*

  login(username, password): Observable {
    const credentials = {username: username, password: password};
    return this.http.post(this.apiUrl, credentials).pipe(map(res => res.json()));
}
*/

}
