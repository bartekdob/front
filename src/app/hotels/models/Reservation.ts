export class Reservation{
  hotelId: number;
  dateFrom: Date;
  dateTo: Date;
  roomTypeRequest: Map<number, number>;
  totalCost: number;
}
