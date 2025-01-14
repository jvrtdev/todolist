import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';

export class RepositoryFactory<E, C = void, U = void> {
  @Inject(PrismaService)
  protected readonly prismaService: PrismaService;

  constructor(public model: string) {}

  create(data: C): Promise<E> {
    return this.prismaService[this.model].create({
      data: {
        ...data,
      },
    });
  }

  update({ id, ...data }: U & { id: string }): Promise<E | null> {
    return this.prismaService[this.model].update({
      where: {
        id,
      },
      data: {
        ...data,
        
      },
    });
  }

  softDelete(id: string): Promise<E | null> {
    return this.prismaService[this.model].update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  delete(id: string): Promise<E> {
    return this.prismaService[this.model].delete({
      where: {
        id,
      },
    });
  }
}
