import {Hotel} from '../../hotels/models/hotel';
import {Moment} from 'moment';
import {RoomType} from '../../hotels/models/RoomType';
import {Room} from '../../hotels/models/Room';

export interface UsersReservation {
  reservationsOrder: ReservationsOrder;
  reservation: Reservation[];
}

export interface ReservationsOrder {
  hotel: Hotel;
  totalCost: number;
  paymentId: number;
}

export interface Reservation {
  startDate: Moment;
  endDate: Moment;
  room: Room;
  area: number;
  storey: number;
  quantity: number;
}
