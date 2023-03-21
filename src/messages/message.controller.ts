import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from 'src/dtos/create-message.dto';
import { MessageServices } from './messages.service';

@Controller('message')
export class MessageController {
  constructor(public messageService: MessageServices) {}

  @Get()
  getAll() {
    return this.messageService.findAll();
  }

  @Post()
  postData(@Body() body: CreateMessageDto) {
    this.messageService.create(body.content);
  }

  @Get('/:id')
  getDataID(@Param() param) {
    console.log(param.id);
    this.messageService.findOne(param.id);
  }
}
