import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AdditiveSubcategoriesService } from './additive_subcategories.service';
import { CreateAdditiveSubcategoryDto } from './dto/create-additive_subcategory.dto';
import { UpdateAdditiveSubcategoryDto } from './dto/update-additive_subcategory.dto';

@Controller()
export class AdditiveSubcategoriesController {
  constructor(private readonly additiveSubcategoriesService: AdditiveSubcategoriesService) {}

  @MessagePattern('createAdditiveSubcategory')
  create(@Payload() createAdditiveSubcategoryDto: CreateAdditiveSubcategoryDto) {
    return this.additiveSubcategoriesService.create(createAdditiveSubcategoryDto);
  }

  @MessagePattern('findAllAdditiveSubcategories')
  findAll() {
    return this.additiveSubcategoriesService.findAll();
  }

  @MessagePattern('findOneAdditiveSubcategory')
  findOne(@Payload() id: number) {
    return this.additiveSubcategoriesService.findOne(id);
  }

  @MessagePattern('updateAdditiveSubcategory')
  update(@Payload() updateAdditiveSubcategoryDto: UpdateAdditiveSubcategoryDto) {
    return this.additiveSubcategoriesService.update(updateAdditiveSubcategoryDto.id, updateAdditiveSubcategoryDto);
  }

  @MessagePattern('removeAdditiveSubcategory')
  remove(@Payload() id: number) {
    return this.additiveSubcategoriesService.remove(id);
  }
}
