import { Component, OnInit } from '@angular/core';
import {Hotel} from '../../hotels/models/hotel';
import {HotelService} from '../../hotels/hotel.service';

@Component({
  selector: 'app-managed-hotels-list',
  templateUrl: './managed-hotels-list.component.html',
  styleUrls: ['./managed-hotels-list.component.less']
})
export class ManagedHotelsListComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.loadManagedHotels();
  }

  loadManagedHotels() {
    this.hotelService.getManagedHotels().subscribe(hotels=> this.hotels = hotels);
  }

}
