import { $Enums, Task } from '@prisma/client';

export class TaskEntity implements Task {
 id: string;
 title: string;
 status: $Enums.Status;
 createdAt: Date;
 updatedAt: Date;
}
