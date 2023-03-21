/* eslint-disable prettier/prettier */

import { MessageRepositry } from './messages.repositry';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageServices {
  constructor(public messageRepo: MessageRepositry) {}

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  create(message: string) {
    return this.messageRepo.create(message);
  }
}
