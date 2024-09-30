import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './entity/client.entity';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('client') // Base route: /clients
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get() // GET /clients
  async findAll(): Promise<Client[]> {
    return await this.clientService.findAll();
  }
  @Post()
  async create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientService.createClient(createClientDto);
  }
}
