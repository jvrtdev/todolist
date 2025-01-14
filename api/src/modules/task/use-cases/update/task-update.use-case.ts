import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IBaseUseCase } from 'src/common/base/use-case';
import { UpdateTaskDto } from 'src/domain/dtos/task';
import { TaskEntity } from 'src/domain/entities/task';
import { ITaskRepository } from '../../repositories/itask.repository';
import { TaskFindByIdUseCase } from '../find-by-id/task-find-by-id.use-case';
import { TaskGateway } from '../../gateways/task.gateway';

@Injectable()
export class TaskUpdateUseCase
  implements IBaseUseCase<TaskEntity, UpdateTaskDto>
{
  constructor(
    private readonly taskRepository: ITaskRepository,
    private readonly findByIdUseCase: TaskFindByIdUseCase,
    private readonly taskGateway: TaskGateway
  ) {}

  async execute(data: UpdateTaskDto): Promise<TaskEntity> {
    const task = await this.findByIdUseCase.execute(data.id);

    const update = await this.taskRepository.update({
      ...data,
      id: data.id,
      updatedAt: new Date(),
    });

    if (!update)
      throw new HttpException('Failed to update task', HttpStatus.NOT_FOUND);

    this.taskGateway.taskEvent('updated', update);

    return update;
  }
}
