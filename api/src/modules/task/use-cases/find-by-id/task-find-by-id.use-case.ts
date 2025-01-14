import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IBaseUseCase } from 'src/common/base/use-case';
import { TaskEntity } from 'src/domain/entities/task';
import { ITaskRepository } from '../../repositories/itask.repository';

@Injectable()
export class TaskFindByIdUseCase
  implements IBaseUseCase<TaskEntity, string>
{
  constructor(private readonly taskRepository: ITaskRepository) {}

  async execute(id: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findById(id);

    if (!task)
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

    return task

  }
}
