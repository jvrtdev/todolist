import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    description: 'Id da tarefa',
    example: 'd3d3d3d3-d3d3-d3d3-d3d3-d3d3d3d3d3d3',
  })
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Titulo da tarefa',
    example: 'Ler um livro',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'Status da tarefa',
    example: 'PENDING ou DONE',
  })
  @IsEnum($Enums.Status)
  @IsOptional()
  status?: $Enums.Status;

  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}
