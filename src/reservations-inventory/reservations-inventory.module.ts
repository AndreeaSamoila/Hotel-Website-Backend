import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsInventory } from './entity/reservations-inventory.entity';
import { ReservationsInventoryController } from './reservations-inventory.controller';
import { ReservationsInventoryService } from './reservations-inventory.service';
import { RoomModule } from 'src/room/room.module';
import { ReservationModule } from 'src/reservation/reservation.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservationsInventory]),
    RoomModule,
    ReservationModule,
  ],
  controllers: [ReservationsInventoryController],
  providers: [ReservationsInventoryService],
  exports: [ReservationsInventoryService, TypeOrmModule],
})
export class ReservationsInventoryModule {}
