import { Module } from '@nestjs/common';
import { DishIngredientsService } from './dish_ingredients.service';
import { DishIngredientsController } from './dish_ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishesModule } from '../dishes/dishes.module';
import { DishIngredient } from './entities/dish_ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DishIngredient]), DishesModule],
  controllers: [DishIngredientsController],
  providers: [DishIngredientsService],
  exports: [TypeOrmModule],
})
export class DishIngredientsModule {}
