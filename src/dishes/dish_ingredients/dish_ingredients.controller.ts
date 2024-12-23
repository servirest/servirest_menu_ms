import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DishIngredientsService } from './dish_ingredients.service';
import { CreateDishIngredientDto } from './dto/create-dish_ingredient.dto';
import { UpdateDishIngredientDto } from './dto/update-dish_ingredient.dto';

@Controller()
export class DishIngredientsController {
  constructor(private readonly dishIngredientsService: DishIngredientsService) {}

  @MessagePattern('createDishIngredient')
  create(@Payload() createDishIngredientDto: CreateDishIngredientDto) {
    return this.dishIngredientsService.create(createDishIngredientDto);
  }

  @MessagePattern('findAllDishIngredients')
  findAll() {
    return this.dishIngredientsService.findAll();
  }

  @MessagePattern('findOneDishIngredient')
  findOne(@Payload() id: number) {
    return this.dishIngredientsService.findOne(id);
  }

  @MessagePattern('updateDishIngredient')
  update(@Payload() updateDishIngredientDto: UpdateDishIngredientDto) {
    return this.dishIngredientsService.update(updateDishIngredientDto.id, updateDishIngredientDto);
  }

  @MessagePattern('removeDishIngredient')
  remove(@Payload() id: number) {
    return this.dishIngredientsService.remove(id);
  }
}
