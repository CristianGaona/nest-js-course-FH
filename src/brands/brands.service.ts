import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    /* {id: uuid(), name: 'Toyota', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Ford', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Honda', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Nissan', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Chevrolet', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Hyundai', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Kia', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Mercedes-Benz', createdAt: new Date().getTime()},
    {id: uuid(), name: 'BMW', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Audi', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Lexus', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Mazda', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Subaru', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Volkswagen', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Tesla', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Porsche', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Volvo', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Land Rover', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Jeep', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Dodge', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Mitsubishi', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Ram', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Buick', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Cadillac', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Chrysler', createdAt: new Date().getTime()},
    {id: uuid(), name: 'GMC', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Acura', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Infiniti', createdAt: new Date().getTime()},
    {id: uuid(), name: 'Jaguar', createdAt: new Date().getTime()}, */
  ]
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    }

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if(!brand)
      throw new NotFoundException(`Brand with id "${id}" not found`)
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto }
        return brandDB
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    const brand = this.findOne(id);
    if(brand && id === brand.id){
      this.brands = this.brands.filter(brand => brand.id !== id);
      return { message: 'Brand deleted'}
    }
    
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
}
}
