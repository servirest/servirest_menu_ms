import { PartialType } from '@nestjs/mapped-types';
import { CreateAdditiveSubcategoryDto } from './create-additive_subcategory.dto';

export class UpdateAdditiveSubcategoryDto extends PartialType(CreateAdditiveSubcategoryDto) {
  id: number;
}
