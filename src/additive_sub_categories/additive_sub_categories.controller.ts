import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AdditiveSubCategoriesService } from './additive_sub_categories.service';
import { CreateAdditiveSubCategoryDto } from './dto/create-additive_sub_category.dto';
import { UpdateAdditiveSubCategoryDto } from './dto/update-additive_sub_category.dto';

@Controller()
export class AdditiveSubCategoriesController {
  constructor(private readonly additiveSubCategoriesService: AdditiveSubCategoriesService) {}

  @MessagePattern('createAdditiveSubCategory')
  create(@Payload() createAdditiveSubCategoryDto: CreateAdditiveSubCategoryDto) {
    return this.additiveSubCategoriesService.create(createAdditiveSubCategoryDto);
  }

  @MessagePattern('findAllAdditiveSubCategories')
  findAll() {
    return this.additiveSubCategoriesService.findAll();
  }

  @MessagePattern('findOneAdditiveSubCategory')
  findOne(@Payload() id: number) {
    return this.additiveSubCategoriesService.findOne(id);
  }

  @MessagePattern('updateAdditiveSubCategory')
  update(@Payload() updateAdditiveSubCategoryDto: UpdateAdditiveSubCategoryDto) {
    return this.additiveSubCategoriesService.update(updateAdditiveSubCategoryDto.id, updateAdditiveSubCategoryDto);
  }

  @MessagePattern('removeAdditiveSubCategory')
  remove(@Payload() id: number) {
    return this.additiveSubCategoriesService.remove(id);
  }
}
