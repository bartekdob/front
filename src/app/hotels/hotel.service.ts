import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Hotel} from './models/hotel';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: Http) { }

  private apiUrl = 'http://localhost:8080/hotels';

  getHotels(): Observable<Hotel[]> {
    return this.http.get(this.apiUrl).pipe(
      map(res => res.json()));
  }

}
