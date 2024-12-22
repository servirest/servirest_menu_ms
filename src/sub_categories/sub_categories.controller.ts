import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SubCategoriesService } from './sub_categories.service';
import { CreateSubCategoryDto } from './dto/create-sub_category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub_category.dto';

@Controller()
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @MessagePattern('createSubCategory')
  create(@Payload() createSubCategoryDto: CreateSubCategoryDto) {
    return this.subCategoriesService.create(createSubCategoryDto);
  }

  @MessagePattern('findAllSubCategories')
  findAll() {
    return this.subCategoriesService.findAll();
  }

  @MessagePattern('findOneSubCategory')
  findOne(@Payload() id: number) {
    return this.subCategoriesService.findOne(id);
  }

  @MessagePattern('updateSubCategory')
  update(@Payload() updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.subCategoriesService.update(updateSubCategoryDto.id, updateSubCategoryDto);
  }

  @MessagePattern('removeSubCategory')
  remove(@Payload() id: number) {
    return this.subCategoriesService.remove(id);
  }
}
