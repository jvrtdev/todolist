import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IBaseUseCase } from 'src/common/base/use-case';
import { CreateTaskDto } from 'src/domain/dtos/task';
import { TaskEntity } from 'src/domain/entities/task';
import { TaskGateway } from '../../gateways/task.gateway';
import { ITaskRepository } from '../../repositories/itask.repository';

@Injectable()
export class TaskCreateUseCase
  implements IBaseUseCase<TaskEntity, CreateTaskDto>
{
  constructor(
    private readonly taskRepository: ITaskRepository,
    private readonly taskGateway: TaskGateway,
  ) {}

  async execute(data: CreateTaskDto): Promise<TaskEntity> {
    if (data.title) {
      const titleAlredyExists = await this.taskRepository.findByTitle(
        data.title,
      );

      if (titleAlredyExists) {
        throw new HttpException(
          'Task title already exists',
          HttpStatus.CONFLICT,
        );
      }
      const task = await this.taskRepository.create(data);
      this.taskGateway.taskEvent('created', task);
      return task;
    }
  }
}
