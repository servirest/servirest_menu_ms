import { PartialType } from '@nestjs/mapped-types';
import { CreateAdditiveSubCategoryDto } from './create-additive_sub_category.dto';

export class UpdateAdditiveSubCategoryDto extends PartialType(CreateAdditiveSubCategoryDto) {
  id: number;
}
