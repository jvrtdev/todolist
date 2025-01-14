import { Module } from '@nestjs/common';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { TaskModule } from './modules/task/task.module';


@Module({
  imports: [
    PrismaModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
