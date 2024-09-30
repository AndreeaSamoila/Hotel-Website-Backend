import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entity/reservation.entity';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { ClientModule } from 'src/client/client.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation]), ClientModule],
  controllers: [ReservationController],
  providers: [ReservationService],
  exports: [ReservationService, TypeOrmModule],
})
export class ReservationModule {}
