import { Module } from '@nestjs/common';
import { AdditivesService } from './additives.service';
import { AdditivesController } from './additives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Additive } from './entities/additive.entity';
import { AdditiveIngredient } from '../additive_ingredients/entities/additive_ingredient.entity';
import { AdditiveSubcategory } from '../additive_subcategories/entities/additive_subcategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Additive, AdditiveIngredient, AdditiveSubcategory ])],
  controllers: [AdditivesController],
  providers: [AdditivesService],
  exports: [AdditivesService, TypeOrmModule],
})
export class AdditivesModule {}
