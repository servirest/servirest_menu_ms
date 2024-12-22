import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AdditiveIngredientsService } from './additive_ingredients.service';
import { CreateAdditiveIngredientDto } from './dto/create-additive_ingredient.dto';
import { UpdateAdditiveIngredientDto } from './dto/update-additive_ingredient.dto';

@Controller()
export class AdditiveIngredientsController {
  constructor(private readonly additiveIngredientsService: AdditiveIngredientsService) {}

  @MessagePattern('createAdditiveIngredient')
  create(@Payload() createAdditiveIngredientDto: CreateAdditiveIngredientDto) {
    return this.additiveIngredientsService.create(createAdditiveIngredientDto);
  }

  @MessagePattern('findAllAdditiveIngredients')
  findAll() {
    return this.additiveIngredientsService.findAll();
  }

  @MessagePattern('findOneAdditiveIngredient')
  findOne(@Payload() id: number) {
    return this.additiveIngredientsService.findOne(id);
  }

  @MessagePattern('updateAdditiveIngredient')
  update(@Payload() updateAdditiveIngredientDto: UpdateAdditiveIngredientDto) {
    return this.additiveIngredientsService.update(updateAdditiveIngredientDto.id, updateAdditiveIngredientDto);
  }

  @MessagePattern('removeAdditiveIngredient')
  remove(@Payload() id: number) {
    return this.additiveIngredientsService.remove(id);
  }
}

