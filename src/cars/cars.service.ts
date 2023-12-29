import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        { id: uuid(), brand: 'Toyota', model: 'Corolla' }, { id: uuid(), brand: 'Honda', model: 'Civic' }, { id:uuid(), brand: 'Ford', model: 'Focus' }, { id:uuid(), brand: 'Nissan', model: 'Sentra' }, { id: uuid(), brand: 'Chevrolet', model: 'Cruze' }, { id:uuid(), brand: 'Hyundai', model: 'Elantra' }, { id:uuid(), brand: 'Volkswagen', model: 'Jetta' }, { id:uuid(), brand: 'Kia', model: 'Forte' }, { id:uuid(), brand: 'Mazda', model: '3' }, { id: uuid(), brand: 'Subaru', model: 'Impreza}' }];

    findAll(){
        return this.cars;
    }

    findById(id: string){
        const car =  this.cars.find(car => car.id === id);
        if(!car){
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }


    createCar(car: CreateCarDto): CreateCarDto{
        const newCar: Car ={
            id: uuid(),
            ...car
        }

        this.cars.push(newCar);
        return newCar;
    }


    updateCar(id: string, updateCarDto: UpdateCarDto){
        if(updateCarDto.id && updateCarDto.id !== id){
            throw new BadRequestException(`Car id is not valid`)
        }

        let car = this.findById(id);
            const index = this.cars.findIndex(car => car.id === id);
            this.cars[index] = {
                ...car,
                ...updateCarDto,
                id
            }
            return this.cars[index];
    }

    deleteCar(id: string){
        const car = this.findById(id);

        if(car !==null){
            this.cars = this.cars.filter(car => car.id !== id);
            return {
                message: `The car with id: ${id} has been deleted`,
            };
        }
    }
}
