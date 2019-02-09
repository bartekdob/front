import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Hotel} from './models/hotel';
import {map} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
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

  getManagedHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/managedHotels`).pipe();
  }

  createHotel(data: Object): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.apiUrl}/createHotel`, data, {observe: 'response'}).pipe();

  }

}
