import { PartialType } from '@nestjs/mapped-types';
import { CreateAdditiveIngredientDto } from './create-additive_ingredient.dto';

export class UpdateAdditiveIngredientDto extends PartialType(CreateAdditiveIngredientDto) {
  id: number;
}
