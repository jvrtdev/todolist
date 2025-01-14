import { RepositoryFactory } from "src/common/factories/repository";
import { CreateTaskDto, UpdateTaskDto } from "src/domain/dtos/task";
import { TaskEntity } from "src/domain/entities/task";

export abstract class ITaskRepository extends RepositoryFactory<TaskEntity, CreateTaskDto, UpdateTaskDto> {
  constructor() {
    super('task');
  }

  abstract getAll(): Promise<TaskEntity[]>
  abstract findById(id: string): Promise<TaskEntity>
  abstract findByTitle(title: string): Promise<TaskEntity | null>
 }
