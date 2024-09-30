import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsNumber()
  client_id: number;
}
