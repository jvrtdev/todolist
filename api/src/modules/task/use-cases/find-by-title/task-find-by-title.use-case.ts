import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IBaseUseCase } from 'src/common/base/use-case';
import { CreateTaskDto } from 'src/domain/dtos/task';
import { TaskEntity } from 'src/domain/entities/task';
import { ITaskRepository } from '../../repositories/itask.repository';

@Injectable()
export class TaskFindByTitleUseCase
  implements IBaseUseCase<TaskEntity, string>
{
  constructor(private readonly taskRepository: ITaskRepository) {}

  async execute(title: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findByTitle(title);

    if (!task)
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

    return task
  }
}
