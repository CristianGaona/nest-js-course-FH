import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor( private readonly carsService: CarsService){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarByIdi(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.findById(id);
    }

    @Post()
    createNewCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.createCar(createCarDto);
    }

    @Patch(':id')
    updateCar(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto){
        return this.carsService.updateCar(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id') id: string){
        return this.carsService.deleteCar(id);
    }
}
