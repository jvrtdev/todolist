import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from 'src/domain/dtos/task';
import { TaskEntity } from 'src/domain/entities/task';
import { TaskCreateUseCase } from '../use-cases/create/task-create.use-case';
import { TaskDeleteUseCase } from '../use-cases/delete/task-delete.use-case';
import { TaskFindAllUseCase } from '../use-cases/find-all/task-find-all.use-case';
import { TaskUpdateUseCase } from '../use-cases/update/task-update.use-case';
import { ApiResponse } from '@nestjs/swagger';
import { TaskFindByIdUseCase } from '../use-cases/find-by-id/task-find-by-id.use-case';

@Controller('task')
export class TaskController {
  constructor(
    private readonly findAllUseCase: TaskFindAllUseCase,
    private readonly createUseCase: TaskCreateUseCase,
    private readonly updateUseCase: TaskUpdateUseCase,
    private readonly deleteUseCase: TaskDeleteUseCase,
    private readonly findByIdUseCase: TaskFindByIdUseCase
  ) {}
  @Post()
  Create(@Body() dto: CreateTaskDto): Promise<TaskEntity> {
    return this.createUseCase.execute(dto);
  }
  @Get()
  @ApiResponse({ status: 200, description: 'Sucesso ao buscar todas as tasks!' })
  @ApiResponse({ status: 500, description: 'Erro no servidor!' })
  FindAll(): Promise<TaskEntity[]> {
    return this.findAllUseCase.execute();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Sucesso ao buscar a task!' })
  @ApiResponse({ status: 400, description: 'Task não encontrada!' })
  @ApiResponse({ status: 500, description: 'Erro no servidor!' })
  FindById(@Param('id') id: string) {
    return this.findByIdUseCase.execute(id);
  }


  @ApiResponse({ status: 200, description: 'Sucesso ao alterar task!' })
  @ApiResponse({ status: 400, description: 'Erro ao atualizar task!' })
  @ApiResponse({ status: 500, description: 'Erro no servidor!' })
  @Put()
  Update(@Body() dto: UpdateTaskDto): Promise<TaskEntity> {
    return this.updateUseCase.execute(dto);
  }

  @ApiResponse({ status: 200, description: 'Sucesso ao deletar task!' })
  @ApiResponse({ status: 400, description: 'Erro ao deletar task!' })
  @ApiResponse({ status: 500, description: 'Erro no servidor!' })
  @Delete(':id')
  Delete(@Param('id') taskId: string): Promise<boolean> {
    return this.deleteUseCase.execute(taskId);
  }
}
