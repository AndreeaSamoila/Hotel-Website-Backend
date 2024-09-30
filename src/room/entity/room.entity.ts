import {
  Entity,
  Index,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
// eslint-disable-next-line prettier/prettier
import { ApiProperty } from '@nestjs/swagger';
import { ReservationsInventory } from '../../reservations-inventory/entity/reservations-inventory.entity';

export enum BedType {
  SINGLE = 'Single Bed',
  DOUBLE = 'Double Bed',
  KING = 'King Bed',
  TWIN = 'Twin Bed',
}

@Entity('room')
export class Room {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  roomId: number;

  @Index({
    unique: true,
  })
  @Column({ length: 200 })
  description: string;

  @Column({ type: 'enum', enum: BedType })
  bed_type: BedType;

  @Column()
  adults_number: number;

  @Column()
  children_number: number;

  @Column({ type: 'boolean', default: false })
  is_reserved: boolean;

  @Column()
  price_per_night: number;

  @OneToMany(
    () => ReservationsInventory,
    (reservationsInventory) => reservationsInventory.room,
    {
      onDelete: 'CASCADE',
    },
  )
  reservationsInventory: ReservationsInventory[];
}
