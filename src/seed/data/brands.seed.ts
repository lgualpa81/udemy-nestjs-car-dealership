import { Brand } from './../..//brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

const createdAt: number = new Date().getTime();

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt,
  },
  {
    id: uuid(),
    name: 'Mitsubishi',
    createdAt,
  },
  {
    id: uuid(),
    name: 'Honda',
    createdAt,
  },
];
