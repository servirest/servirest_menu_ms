import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RpcException } from '@nestjs/microservices';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(paginationDto : PaginationDto) {
    const { limit, page } = paginationDto;
    const totalPage = await this.categoryRepository.count();
    const lastPage = Math.ceil(totalPage / limit);
    return {
      data: await this.categoryRepository.find({
        skip: (page - 1) * limit,
        take: limit,
      }),
      total :totalPage,
      page: page,
      lastPage: lastPage
    }
  }

  async create(categoryData: Partial<Category>): Promise<Category> {
    const category = this.categoryRepository.create(categoryData);
    return this.categoryRepository.save(category);
  }

  async findOne(id: number ): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: {
        id : id,
        status: true
      }
    })
    if (!category) {
      throw new RpcException({
        message : `Category wiht id# ${id} not found`,
        status : HttpStatus.BAD_REQUEST
      });
    }
    return category;
  }

  async update(id: number, categoryData: Partial<Category>): Promise<Category> {
    await this.findOne(id);
    await this.categoryRepository.update(id, categoryData);
    return this.categoryRepository.findOneBy({id});
  }

  async updateStatus(id: number, status: boolean): Promise<Category> {
    const category = await this.findOne(id);
    category.status = status;
    return this.categoryRepository.save(category);
    
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.categoryRepository.softDelete({ id })
  }
}
