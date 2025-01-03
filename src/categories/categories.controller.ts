import { Controller, ParseIntPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller()
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @MessagePattern({ cmd: 'find_all_categories' })
  async findAll(@Payload() paginationDto : PaginationDto) {
    return this.categoryService.findAll(paginationDto);
  }

  @MessagePattern({ cmd: 'create_category' })
  async create(@Payload() createCategoryDto: Partial<Category>): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @MessagePattern({ cmd: 'find_category_by_id' })
  async findOne(@Payload() id: number): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_category' })
  async update(
    @Payload() { id, updateCategoryDto }: { id: number; updateCategoryDto: Partial<Category> },
  ): Promise<Category> {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @MessagePattern({ cmd: 'update_category_status' })
  async updateStatus(
    @Payload() { id, status }: { id: number; status: boolean },
  ): Promise<Category> {
    return this.categoryService.updateStatus(id, status);
  }
  
  @MessagePattern({ cmd: 'remove_category' })
  async remove(
    @Payload('id', ParseIntPipe) id: number ) {
    return this.categoryService.remove(id);
  }
}
