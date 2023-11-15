import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientiService } from './clienti.service';
import { CreateClientiDto } from './dto/create-clienti.dto';
import { UpdateClientiDto } from './dto/update-clienti.dto';

@Controller('clienti')
export class ClientiController {
  constructor(private readonly clientiService: ClientiService) {}

  @Post()
  create(@Body() createClientiDto: CreateClientiDto) {
    return this.clientiService.create(createClientiDto);
  }

  @Get()
  findAll() {
    return this.clientiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientiDto: UpdateClientiDto) {
    return this.clientiService.update(+id, updateClientiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientiService.remove(+id);
  }
}
