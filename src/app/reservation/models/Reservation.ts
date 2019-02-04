import {RoomRequest} from './RoomRequest';
import {Moment} from 'moment';

export class Reservation{
  hotelId: number;
  dateFrom: Moment;
  dateTo: Moment;
  roomRequests: RoomRequest[];
  totalCost: number;
}
