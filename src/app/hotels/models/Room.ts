import {RoomType} from './RoomType';

export interface Room {
  id: number;
  roomType: RoomType;
  storey: number;
  area: number;
}
