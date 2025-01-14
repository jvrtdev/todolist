import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IBaseUseCase } from 'src/common/base/use-case';
import { TaskEntity } from 'src/domain/entities/task';
import { TaskGateway } from '../../gateways/task.gateway';
import { ITaskRepository } from '../../repositories/itask.repository';

@Injectable()
export class TaskDeleteUseCase implements IBaseUseCase<boolean, string> {
  constructor(
    private readonly taskRepository: ITaskRepository,
    private readonly taskGateway: TaskGateway,
  ) {}

  async execute(id: string): Promise<true> {
    const task = await this.taskRepository.findById(id);

    const remove = await this.taskRepository.delete(id);

    if (!remove)
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    
    this.taskGateway.taskEvent('deleted', task);

    return true;
  }
}
