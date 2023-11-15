import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ClientiService } from './clienti.service';
import { CreateClientiDto } from './dto/create-clienti.dto';
import { UpdateClientiDto } from './dto/update-clienti.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { ClientiEntity } from './entities/clienti.entity';
import { Public } from 'src/decorators/public.decorator';

@UseGuards(AuthGuard)
@Controller('clienti')
export class ClientiController {
  constructor(private readonly clientiService: ClientiService) {}
  @Public()
  @Post()
  async create(@Body() cliente: ClientiEntity): Promise<ClientiEntity> {
    return await this.clientiService.crea(cliente);
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
