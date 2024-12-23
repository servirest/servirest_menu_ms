import { Module } from '@nestjs/common';
import { AdditiveIngredientsService } from './additive_ingredients.service';
import { AdditiveIngredientsController } from './additive_ingredients.controller';

@Module({
  controllers: [AdditiveIngredientsController],
  providers: [AdditiveIngredientsService],
})
export class AdditiveIngredientsModule {}
