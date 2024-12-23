import { Module } from '@nestjs/common';
import { SubcategoriesService } from './subcategories.service';
import { SubcategoriesController } from './subcategories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategory } from './entities/subcategory.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subcategory]), CategoriesModule],
  controllers: [SubcategoriesController],
  providers: [SubcategoriesService, CategoriesService],
  exports: [TypeOrmModule],
})
export class SubcategoriesModule {}
