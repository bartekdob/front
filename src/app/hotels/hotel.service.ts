import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Hotel} from './models/hotel';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ReservationRequest} from '../reservation/models/ReservationRequest';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/hotels';

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl).pipe();
  }

  getHotelDetails(hotelId: Number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/${hotelId}`).pipe();
  }


}
