import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ReservationsInventory } from 'src/reservations-inventory/entity/reservations-inventory.entity';
import { Client } from 'src/client/entity/client.entity';

@Entity('reservation')
export class Reservation {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  reservationId: number;

  @Column()
  checkIn_Date: Date;

  @Column()
  checkOut_Date: Date;

  @Column()
  is_active: boolean;

  @ManyToOne(() => Client, (client) => client.reservations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'client_code' })
  client: Client;

  // One reservation can have multiple reservationsInventory
  @OneToMany(
    () => ReservationsInventory,
    (reservationsInventory) => reservationsInventory.reservation,
    {
      cascade: true,
    },
  )
  reservationsInventory: ReservationsInventory[];
}
