import { Injectable } from '@nestjs/common';
import { CreateAdditiveIngredientDto } from './dto/create-additive_ingredient.dto';
import { UpdateAdditiveIngredientDto } from './dto/update-additive_ingredient.dto';

@Injectable()
export class AdditiveIngredientsService {
  create(createAdditiveIngredientDto: CreateAdditiveIngredientDto) {
    return 'This action adds a new additiveIngredient';
  }

  findAll() {
    return `This action returns all additiveIngredients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additiveIngredient`;
  }

  update(id: number, updateAdditiveIngredientDto: UpdateAdditiveIngredientDto) {
    return `This action updates a #${id} additiveIngredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} additiveIngredient`;
  }
}
