import { Module } from '@nestjs/common';
import { DishIngredientsService } from './dish_ingredients.service';
import { DishIngredientsController } from './dish_ingredients.controller';

@Module({
  controllers: [DishIngredientsController],
  providers: [DishIngredientsService],
})
export class DishIngredientsModule {}
