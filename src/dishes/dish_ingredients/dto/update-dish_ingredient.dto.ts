import { PartialType } from '@nestjs/mapped-types';
import { CreateDishIngredientDto } from './create-dish_ingredient.dto';

export class UpdateDishIngredientDto extends PartialType(CreateDishIngredientDto) {
  id: number;
}
