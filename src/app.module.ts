import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { SubCategoriesModule } from './sub_categories/sub_categories.module';
import { DishesModule } from './dishes/dishes.module';
import { DishIngredientsModule } from './dish_ingredients/dish_ingredients.module';
import { AdditiveIngredientsModule } from './additive_ingredients/additive_ingredients.module';
import { AdditiveSubCategoriesModule } from './additive_sub_categories/additive_sub_categories.module';
import { AdditivesModule } from './additives/additives.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: process.env.POSRGRES_HOTS || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true, //solo en desarrollo
      //entities: [User], usar en producción
      synchronize: true,
      /*    Usar en producción   
      extra : { 
        ssl : process.env.POSTGRES_SSL === 'true' 
        ?{
          rejectUnauthorized : false
        }:null
        
      } */
    }),
    CategoriesModule,
    SubCategoriesModule,
    DishesModule,
    DishIngredientsModule,
    AdditiveIngredientsModule,
    AdditiveSubCategoriesModule,
    AdditivesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
