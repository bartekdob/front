import { Component, OnInit } from '@angular/core';
import {Hotel} from '../../hotels/models/hotel';
import {HotelService} from '../../hotels/hotel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-managed-hotels-list',
  templateUrl: './managed-hotels-list.component.html',
  styleUrls: ['./managed-hotels-list.component.less']
})
export class ManagedHotelsListComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService, private router: Router) { }

  ngOnInit() {
    this.loadManagedHotels();
  }

  loadManagedHotels() {
    this.hotelService.getManagedHotels().subscribe(hotels=> this.hotels = hotels);
  }

  deleteHotel(hotel: Hotel) {
    this.hotelService.deleteHotel(hotel.id).then(()=>this.loadManagedHotels());
  }

  goToVirtualReception(hotel: Hotel) {
    this.router.navigate(['manage/virtual-reception', hotel.id]);
  }

  goToEditHotel(hotel: Hotel) {
    this.router.navigate(['manage/edit-hotel', hotel.id]);
  }

}
