import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
import { SubcategoriesModule } from 'src/subcategories/subcategories.module';
import { DishIngredient } from '../dish_ingredients/entities/dish_ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dish, DishIngredient]), SubcategoriesModule],
  controllers: [DishesController],
  providers: [DishesService],
  exports: [TypeOrmModule, DishesService],
})
export class DishesModule {}
