import { Component, OnInit } from '@angular/core';
import {HotelService} from "../hotel.service";
import {Hotel} from "../models/hotel";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.less']
})
export class HotelDetailsComponent implements OnInit {

  constructor(private hotelService: HotelService, private route: ActivatedRoute) {
  }

  private hotel: Hotel;
  private carouselIndex: number;

  ngOnInit() {
    this.carouselIndex = 0;
    this.loadHotel();
  }

  loadHotel() {
    this.hotelService.getHotelDetails(this.route.snapshot.params['id']).subscribe((hotel) => this.hotel = hotel);
  }

  carouselNext(): void {
    this.carouselIndex++;
    if (this.carouselIndex >= this.hotel.roomPhotos.length) {
      this.carouselIndex = 0;
    }
  }

    carouselPrev(): void {
      this.carouselIndex--;
      if (this.carouselIndex < 0) {
        this.carouselIndex = this.hotel.roomPhotos.length - 1;
      }
    }

  }

