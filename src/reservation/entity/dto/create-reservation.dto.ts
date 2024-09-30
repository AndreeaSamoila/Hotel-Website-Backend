import { IsDate, IsBoolean, IsInt } from 'class-validator';

export class CreateReservationDto {
  @IsInt()
  reservation_id: number;
  @IsDate()
  checkIn_Date: Date;

  @IsDate()
  checkOut_Date: Date;

  @IsBoolean()
  is_active: boolean;

  @IsInt()
  client_id: number;
}
