import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Titulo da tarefa',
    example: 'Marcar nutricionista',
  })
  @IsString()
  @IsNotEmpty()
  title: string;


  @IsEnum($Enums.Status)
  @IsOptional()
  status?: $Enums.Status = $Enums.Status.PENDING;
}
