import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ReservationRequest} from './models/ReservationRequest';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  reserve(reservation: ReservationRequest): Observable<any> {
    return this.http.post(this.apiUrl + '/reserve', reservation);
  }

  getUsersReservations(): Observable<any> {
    return this.http.get(this.apiUrl + '/userReservations');
  }

}
