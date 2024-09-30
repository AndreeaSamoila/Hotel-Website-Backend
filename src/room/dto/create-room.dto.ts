import { IsString, IsInt, IsEnum, IsBoolean } from 'class-validator';
import { BedType } from '../entity/room.entity';

export class CreateRoomDto {
  @IsString()
  description: string;

  @IsEnum(BedType)
  bed_type: BedType;

  @IsInt()
  adults_number: number;

  @IsInt()
  children_number: number;

  @IsBoolean()
  is_reserved: boolean;

  @IsInt()
  price_per_night: number;
}
