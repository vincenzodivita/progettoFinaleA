import { Module } from '@nestjs/common';
import { ClientiModule } from './clienti/clienti.module';

@Module({
  imports: [ClientiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
