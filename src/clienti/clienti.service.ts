import { Injectable } from '@nestjs/common';
import { CreateClientiDto } from './dto/create-clienti.dto';
import { UpdateClientiDto } from './dto/update-clienti.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientiEntity } from './entities/clienti.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientiService {
  constructor(
    @InjectRepository(ClientiEntity)
    private clientiRepository: Repository<ClientiEntity>,
  ) {}

  async crea(contocorrenteDto: CreateClientiDto): Promise<ClientiEntity> {
    try {
      const nuovoCliente = this.clientiRepository.create(contocorrenteDto);
      await this.clientiRepository.save(nuovoCliente);

      // this.communicationClient.emit(
      //   'nuovo_cliente',
      //   new NuovoClienteEvent(nuovoContocorrente.Iban),
      // );

      return nuovoCliente;
    } catch (error) {}
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
