import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService], //exportamos los servicios de este modulo para que otro modulo lo importe y use la funcionalidad. Por lo general en el modulo de seed
})
export class CarsModule {}
