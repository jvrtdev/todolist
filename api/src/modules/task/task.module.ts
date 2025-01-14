import { Module } from '@nestjs/common';
import { TaskController } from './controllers/task.controller';
import { ITaskRepository } from './repositories/itask.repository';
import { TaskRepository } from './repositories/task.repository';
import { TaskCreateUseCase } from './use-cases/create/task-create.use-case';
import { TaskDeleteUseCase } from './use-cases/delete/task-delete.use-case';
import { TaskFindAllUseCase } from './use-cases/find-all/task-find-all.use-case';
import { TaskFindByIdUseCase } from './use-cases/find-by-id/task-find-by-id.use-case';
import { TaskUpdateUseCase } from './use-cases/update/task-update.use-case';
import { TaskGateway } from './gateways/task.gateway';

@Module({
  controllers: [TaskController],
  providers: [
    TaskCreateUseCase,
    TaskFindAllUseCase,
    TaskFindByIdUseCase,
    TaskFindByIdUseCase,
    TaskUpdateUseCase,
    TaskDeleteUseCase,
    TaskGateway,
    { provide: ITaskRepository, useClass: TaskRepository },
  ],
  exports: [
    TaskCreateUseCase,
    TaskFindAllUseCase,
    TaskFindByIdUseCase,
    TaskFindByIdUseCase,
    TaskUpdateUseCase,
    TaskDeleteUseCase,
  ],
})
export class TaskModule {}
