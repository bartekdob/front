import { Component, OnInit } from '@angular/core';
import {Hotel} from '../models/hotel';
import {HotelService} from '../hotel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.less']
})
export class HotelsListComponent implements OnInit {

  constructor(private hotelService: HotelService, private router: Router) {
  }

  hotels: Hotel[] = [];

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe((hotels) => {
      this.hotels = hotels;
    });
  }

  goToHotelDetails(hotel: Hotel): void {
    this.router.navigate(['/hotels', 1]);
  }
}
