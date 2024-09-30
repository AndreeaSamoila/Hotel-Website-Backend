import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './entity/reservation.entity';
import { CreateReservationDto } from './entity/dto/create-reservation.dto';
import { Client } from 'src/client/entity/client.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,

    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  // Example: Get all reservations
  async findAll(): Promise<Reservation[]> {
    return await this.reservationRepository.find({
      relations: ['client', 'reservationsInventory'],
    });
  }

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const { client_id, ...reservationData } = createReservationDto;

    // Find client by the provided client_code
    const client = await this.clientRepository.findOne({
      where: { client_id },
    });

    if (!client) {
      throw new Error('Client not found');
    }
    // Create a reservation and associate the client
    const reservation = this.reservationRepository.create({
      ...reservationData,
      client,
    });

    return await this.reservationRepository.save(reservation);
  }
}
