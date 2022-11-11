import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id') //ParseIntPipe es un pipe para hacer transformacion datos entrada
  getCarById(@Param('id', ParseIntPipe) id: number) {
    //console.log({id})
    const car = this.carsService.findOne(Number(id));
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    return car;
  }

  @Post()
  createCar(@Body() payload: any) {
    return payload;
  }

  @Put(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {}

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {}
}
