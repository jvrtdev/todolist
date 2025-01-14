import { Injectable } from '@nestjs/common';
import { IBaseUseCase } from 'src/common/base/use-case';
import { CreateTaskDto } from 'src/domain/dtos/task';
import { TaskEntity } from 'src/domain/entities/task';
import { ITaskRepository } from '../../repositories/itask.repository';

@Injectable()
export class TaskFindAllUseCase
  implements IBaseUseCase<TaskEntity[], void>
{
  constructor(private readonly taskRepository: ITaskRepository) {}

  async execute(): Promise<TaskEntity[]> {
    return await this.taskRepository.getAll();
  }
}
