import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { Reservation } from './entity/reservation.entity';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateReservationDto } from './entity/dto/create-reservation.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  create(
    @Body() CreateReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return this.reservationService.create(CreateReservationDto);
  }

  @Get()
  findAll(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }
}
