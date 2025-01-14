import { Injectable } from '@nestjs/common';
import { TaskEntity } from 'src/domain/entities/task';
import { ITaskRepository } from './itask.repository';

@Injectable()
export class TaskRepository extends ITaskRepository {
  getAll(): Promise<TaskEntity[]> {
    return this.prismaService.task.findMany({
      orderBy: {
        createdAt: 'desc',
        
      }
    });
  }

  findById(id: string): Promise<TaskEntity> {
    return this.prismaService.task.findFirst({
      where: {
        id,
      },
    });
  }

  findByTitle(title: string): Promise<TaskEntity | null> {
    return this.prismaService.task.findFirst({
      where: {
        title,
      },
    });
  }

}
