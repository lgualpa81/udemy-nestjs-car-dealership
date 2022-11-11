import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Mazda',
      model: 'Allegro',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    return car;
  }

  create(payload: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...payload,
    };

    this.cars.push(car);
    return car;
  }

  update(id: string, payload: UpdateCarDto) {
    let carDB = this.findOne(id);

    if (payload.id && payload.id !== id)
      throw new BadRequestException('Car id is not valid');

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...payload,
          id,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return; //undefined
  }
}
