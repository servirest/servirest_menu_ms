import { Module } from '@nestjs/common';
import { AdditiveIngredientsService } from './additive_ingredients.service';
import { AdditiveIngredientsController } from './additive_ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdditiveIngredient } from './entities/additive_ingredient.entity';
import { AdditivesModule } from '../additives/additives.module';
import { AdditivesService } from '../additives/additives.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdditiveIngredient]), AdditivesModule],
  controllers: [AdditiveIngredientsController],
  providers: [AdditiveIngredientsService, AdditivesService],
  exports: [TypeOrmModule],
})
export class AdditiveIngredientsModule {}
