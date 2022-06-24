import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository : Repository<Product>
    ) {}

    async all():Promise<Product[]> {
        return this.productRepository.find();
    }

    async create(data):Promise<Product> {
        return this.productRepository.save(data);
    }
    
    // get Product by Id
    async get(id):Promise<Product> {
        return this.productRepository.findOneBy({id});
    }

    async update(id:number, data):Promise<any> {
        return this.productRepository.update(id, data);
    }


    async delete(id:number):Promise<any> {
        return this.productRepository.delete(id);
    }
}
