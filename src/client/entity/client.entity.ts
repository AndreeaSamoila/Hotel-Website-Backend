import {
  Entity,
  Index,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from 'src/reservation/entity/reservation.entity';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  client_id: number;

  @Index({
    unique: true,
  })
  @Column({ length: 128 })
  client_last_name: string;

  @Column({ length: 128 })
  client_first_name: string;

  @Column({ length: 25 })
  email: string;

  @Column({ length: 10 })
  phone_number: string;

  @OneToMany(() => Reservation, (reservation) => reservation.client, {
    onDelete: 'CASCADE',
  })
  reservations: Reservation[];
}
