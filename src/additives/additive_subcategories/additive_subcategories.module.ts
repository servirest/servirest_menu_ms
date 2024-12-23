import { Module } from '@nestjs/common';
import { AdditiveSubcategoriesService } from './additive_subcategories.service';
import { AdditiveSubcategoriesController } from './additive_subcategories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdditiveSubcategory } from './entities/additive_subcategory.entity';
import { SubcategoriesModule } from 'src/subcategories/subcategories.module';

@Module({
  imports: [TypeOrmModule.forFeature([AdditiveSubcategory]), SubcategoriesModule],
  controllers: [AdditiveSubcategoriesController],
  providers: [AdditiveSubcategoriesService],
  exports: [TypeOrmModule],
})
export class AdditiveSubcategoriesModule {}
