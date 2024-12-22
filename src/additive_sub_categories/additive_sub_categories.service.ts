import { Injectable } from '@nestjs/common';
import { CreateAdditiveSubCategoryDto } from './dto/create-additive_sub_category.dto';
import { UpdateAdditiveSubCategoryDto } from './dto/update-additive_sub_category.dto';

@Injectable()
export class AdditiveSubCategoriesService {
  create(createAdditiveSubCategoryDto: CreateAdditiveSubCategoryDto) {
    return 'This action adds a new additiveSubCategory';
  }

  findAll() {
    return `This action returns all additiveSubCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additiveSubCategory`;
  }

  update(id: number, updateAdditiveSubCategoryDto: UpdateAdditiveSubCategoryDto) {
    return `This action updates a #${id} additiveSubCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} additiveSubCategory`;
  }
}
