import { Module } from '@nestjs/common';
import { ProdottiService } from './prodotti.service';
import { ProdottiController } from './prodotti.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdottiEntity } from './entities/prodotti.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guards/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([ProdottiEntity])],
  controllers: [ProdottiController],
  providers: [
    ProdottiService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class ProdottiModule {}
