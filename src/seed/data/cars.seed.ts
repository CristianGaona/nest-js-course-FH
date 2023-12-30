import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEED:Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' }, { id: uuid(), brand: 'Honda', model: 'Civic' }, { id:uuid(), brand: 'Ford', model: 'Focus' }, { id:uuid(), brand: 'Nissan', model: 'Sentra' }, { id: uuid(), brand: 'Chevrolet', model: 'Cruze' }, { id:uuid(), brand: 'Hyundai', model: 'Elantra' }, { id:uuid(), brand: 'Volkswagen', model: 'Jetta' }, { id:uuid(), brand: 'Kia', model: 'Forte' }, { id:uuid(), brand: 'Mazda', model: '3' }, { id: uuid(), brand: 'Subaru', model: 'Impreza' }, { id:uuid(), brand: 'Mitsubishi', model: 'Lancer' }, { id:uuid(), brand: 'Audi', model: 'A3' }, { id:uuid(), brand: 'BMW', model: '3 Series' }, { id:uuid(), brand: 'Mercedes-Benz', model: 'C-Class' }, { id:uuid(), brand: 'Lexus', model: 'IS' }
]