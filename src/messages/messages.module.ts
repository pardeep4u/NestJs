/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageRepositry } from './messages.repositry';
import { MessageServices } from './messages.service';

@Module({
  controllers: [MessageController],
  providers: [MessageServices, MessageRepositry],
})
export class MessagesModule {}
