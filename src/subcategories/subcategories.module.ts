import { Module } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { SubcategoriesController } from './subcategories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategory } from './entities/subcategory.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoriesService } from 'src/categories/categories.service';
import { Dish } from 'src/dishes/dishes/entities/dish.entity';
import { AdditiveSubcategory } from 'src/additives/additive_subcategories/entities/additive_subcategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategory,Dish, AdditiveSubcategory]), CategoriesModule],
  controllers: [SubcategoriesController],
  providers: [SubcategoriesService, CategoriesService],
  exports: [TypeOrmModule, SubcategoriesService],
})
export class SubcategoriesModule {}
