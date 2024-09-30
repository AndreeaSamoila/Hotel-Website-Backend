import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from 'src/room/entity/room.entity';
import { ReservationsInventory } from './entity/reservations-inventory.entity';

@Injectable()
export class ReservationsInventoryService {
  constructor(
    @InjectRepository(ReservationsInventory)
    private readonly ReservationsInventoryRepository: Repository<ReservationsInventory>,

    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  // Example: Get all reservations
  async findAll(): Promise<ReservationsInventory[]> {
    return await this.ReservationsInventoryRepository.find({
      relations: ['room', 'reservation'],
    });
  }
}
