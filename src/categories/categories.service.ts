import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async create(categoryData: Partial<Category>): Promise<Category> {
    const category = this.categoryRepository.create(categoryData);
    return this.categoryRepository.save(category);
  }

  async findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOneBy({id});
  }

  async update(id: number, categoryData: Partial<Category>): Promise<Category> {
    await this.categoryRepository.update(id, categoryData);
    return this.categoryRepository.findOneBy({id});
  }

  async updateStatus(id: number, status: boolean): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({id});
    if (category) {
      category.status = status;
      return this.categoryRepository.save(category);
    }
    return null;
  }
}
