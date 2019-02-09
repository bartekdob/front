import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HotelService} from '../../hotels/hotel.service';
import {parseHttpResponse} from '../../../../node_modules/@types/selenium-webdriver/http';
import {MatHorizontalStepper} from '@angular/material';

@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.less']
})
export class HotelCreateComponent implements OnInit {

  hotelFormGroup: FormGroup;
  typesFormGroup: FormGroup;
  @ViewChild('stepper') stepper: ElementRef;

  constructor(private formBuilder: FormBuilder, private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelFormGroup = this.buildHotelForm();
    this.typesFormGroup = this.buildTypesForm();
  }

  buildHotelForm() {
    return this.formBuilder.group(
      {
        name: '',
        description: '',
        city: '',
        zipCode: '',
        buildingNr: '',
        street: ''
      }
    );
  }

  buildTypesForm() {
    return this.formBuilder.group(
      {
        roomTypes: this.formBuilder.array([this.buildRoomTypeGroup()])
      }
    )
  }

  buildRoomTypeGroup(): FormGroup {
    return this.formBuilder.group({
      roomTypeName: '',
      description: '',
      singleBedCount: 1,
      doubleBedCount: 0,
      bathroomCount: 1,
      prize: '',
      tv: true,
      quantity: 0
    })
  }

  get roomTypes(): FormArray {
    return <FormArray>this.typesFormGroup.get('roomTypes');
  }

  addRoomType(): void {
    this.roomTypes.push(this.buildRoomTypeGroup());
  }

  removeRoomType(i: number): void {
    this.roomTypes.removeAt(i);
  }

  createHotel(): void {
    let formsData = Object.assign({}, this.hotelFormGroup.value, this.typesFormGroup.value);
    this.hotelService.createHotel(formsData).subscribe( resp => {
      if(resp.ok)
      {
        let test = <MatHorizontalStepper><unknown>this.stepper;
        test.next();
      }}
    );
  }

}
