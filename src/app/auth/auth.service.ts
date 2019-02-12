import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Interceptor} from '../core/app.interceptor';
import {HttpClient} from '@angular/common/http';
import {User} from '../login/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'http://localhost:8080';

  private _isLoggedIn: boolean = false;
  private _currentUser: string;
  private _roles: string[];

  login(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    return this.http.post(this.apiUrl + '/login', credentials).pipe();
  }


  register(user: User): Observable<any> {
    return this.http.post(this.apiUrl + '/register', user);
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.currentUser = '';
    this.isLoggedIn = false;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  get currentUser(): string {
    return this._currentUser;
  }

  set currentUser(value: string) {
    this._currentUser = value;
  }


  get roles(): string[] {
    return this._roles;
  }

  set roles(value: string[]) {
    this._roles = value;
  }
}
