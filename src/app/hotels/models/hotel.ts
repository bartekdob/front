import {RoomType} from './RoomType';

export interface Hotel {
  id: Number;
  city: String;
  street: String;
  buildingNr: String;
  zipCode: String;
  name: String;
  photo: String;
  roomPhotos: String[];
  roomTypes: RoomType[];
  description: String;
}
