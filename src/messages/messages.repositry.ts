/* eslint-disable prettier/prettier */
import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageRepositry {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf-8');
    const data = JSON.parse(content);
    const value = data[id];
    console.log(value);
    const realv = JSON.stringify(value);
    return realv;
  }
  async findAll() {
    const content = await readFile('messages.json', 'utf-8');
    const data = JSON.parse(content);
    return data;
  }
  async create(message: string) {
    const content = await readFile('messages.json', 'utf-8');
    const data = JSON.parse(content);
    const id = Math.floor(Math.random() * 999);
    data[id] = { id, message };
    await writeFile('messages.json', JSON.stringify(data));
  }
}
