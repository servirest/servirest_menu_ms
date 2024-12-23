import { Injectable } from '@nestjs/common';
import { CreateAdditiveSubcategoryDto } from './dto/create-additive_subcategory.dto';
import { UpdateAdditiveSubcategoryDto } from './dto/update-additive_subcategory.dto';

@Injectable()
export class AdditiveSubcategoriesService {
  create(createAdditiveSubcategoryDto: CreateAdditiveSubcategoryDto) {
    return 'This action adds a new additiveSubcategory';
  }

  findAll() {
    return `This action returns all additiveSubcategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additiveSubcategory`;
  }

  update(id: number, updateAdditiveSubcategoryDto: UpdateAdditiveSubcategoryDto) {
    return `This action updates a #${id} additiveSubcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} additiveSubcategory`;
  }
}
