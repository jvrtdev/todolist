import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TaskEntity } from 'src/domain/entities/task';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class TaskGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('TaskGateway');

  @WebSocketServer() wsServer: Server;

  taskEvent(action: 'created' | 'updated' | 'deleted', data: TaskEntity) {
    console.log('EVENTO EMITIDO:', action, data);
    this.wsServer.emit('taskEvent', { action, data });
  }

  afterInit() {
    this.logger.log('init');
  }
  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
