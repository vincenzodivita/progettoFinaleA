import { Injectable } from '@nestjs/common';
import { CreateClientiDto } from './dto/create-clienti.dto';
import { UpdateClientiDto } from './dto/update-clienti.dto';

@Injectable()
export class ClientiService {
  create(createClientiDto: CreateClientiDto) {
    return 'This action adds a new clienti';
  }

  findAll() {
    return `This action returns all clienti`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clienti`;
  }

  update(id: number, updateClientiDto: UpdateClientiDto) {
    return `This action updates a #${id} clienti`;
  }

  remove(id: number) {
    return `This action removes a #${id} clienti`;
  }
}
