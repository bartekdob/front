import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../hotels/hotel.service';
import {Hotel} from '../../hotels/models/hotel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-virtual-reception',
  templateUrl: './virtual-reception.component.html',
  styleUrls: ['./virtual-reception.component.less']
})
export class VirtualReceptionComponent implements OnInit {

  hotel: Hotel;

  constructor(private hotelService: HotelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadHotel();
  }

  loadHotel(): void {
    this.hotelService.getHotelDetails(this.route.snapshot.params['id']).subscribe(
      (hotel) => this.hotel = hotel);
  }

}
