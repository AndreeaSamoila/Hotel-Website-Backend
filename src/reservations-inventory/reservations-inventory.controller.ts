import { Controller, Get } from '@nestjs/common';
import { ReservationsInventoryService } from './reservations-inventory.service';
import { ReservationsInventory } from './entity/reservations-inventory.entity';

@Controller('reservationsInventoryController')
export class ReservationsInventoryController {
  constructor(
    private readonly reservationInventoryService: ReservationsInventoryService,
  ) {}

  @Get()
  findAll(): Promise<ReservationsInventory[]> {
    return this.reservationInventoryService.findAll();
  }
}
