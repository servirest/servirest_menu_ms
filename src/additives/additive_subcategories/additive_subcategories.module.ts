import { Module } from '@nestjs/common';
import { AdditiveSubcategoriesService } from './additive_subcategories.service';
import { AdditiveSubcategoriesController } from './additive_subcategories.controller';

@Module({
  controllers: [AdditiveSubcategoriesController],
  providers: [AdditiveSubcategoriesService],
})
export class AdditiveSubcategoriesModule {}
