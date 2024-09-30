import {
  Entity,
  Index,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Room } from 'src/room/entity/room.entity';
import { Reservation } from 'src/reservation/entity/reservation.entity';

@Entity('reservations_inventory')
export class ReservationsInventory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  inventoryId: number;

  @Index({
    unique: true,
  })
  @ManyToOne(() => Room, (room) => room.reservationsInventory, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'room_code' })
  room: Room;

  @ManyToOne(
    () => Reservation,
    (reservation) => reservation.reservationsInventory,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'reservation_code' })
  reservation: Reservation;
}
