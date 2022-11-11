import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Mazda',
      model: 'Allegro',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOne(id: number) {
    return this.cars.find((car) => car.id === id);
  }
}
