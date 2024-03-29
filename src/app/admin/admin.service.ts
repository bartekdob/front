import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDetails} from './models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.apiUrl+'/users');
  }

  getRoles(): Observable<any> {
    return this.http.get(this.apiUrl+'/getAllRoles');
  }

  deleteUser(userId: number): Promise<Observable<any>> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`).toPromise();
  }

}
