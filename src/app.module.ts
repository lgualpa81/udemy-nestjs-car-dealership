import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';


@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: []
})
//modulo principal tiene las referencias a otros modulos /servicios
export class AppModule {}
