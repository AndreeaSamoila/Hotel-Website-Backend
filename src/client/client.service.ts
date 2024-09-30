import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entity/client.entity';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  // Example: Get all clients
  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }
  async findClientCode(client_id: number): Promise<Client | null> {
    return this.clientRepository.findOne({ where: { client_id } });
  }

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    const { client_id, ...clientData } = createClientDto;

    // Check if a client with the same client_code already exists
    const existingClient = await this.clientRepository.findOne({
      where: { client_id },
    });

    if (existingClient) {
      // Throw an exception if the client already exists
      throw new ConflictException('Client with this code already exists');
    }

    // Create a new client entity
    const client = this.clientRepository.create({
      ...clientData,
      client_id,
    });

    // Save the new client to the database
    return await this.clientRepository.save(client);
  }

  // Other methods (e.g., findAll, findOne, etc.)
}
