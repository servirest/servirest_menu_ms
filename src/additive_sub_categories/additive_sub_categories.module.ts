import { Module } from '@nestjs/common';
import { AdditiveSubCategoriesService } from './additive_sub_categories.service';
import { AdditiveSubCategoriesController } from './additive_sub_categories.controller';

@Module({
  controllers: [AdditiveSubCategoriesController],
  providers: [AdditiveSubCategoriesService],
})
export class AdditiveSubCategoriesModule {}
