import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { AdditivesModule } from './additives/additives/additives.module';
import { AdditiveIngredientsModule } from './additives/additive_ingredients/additive_ingredients.module';
import { AdditiveSubcategoriesModule } from './additives/additive_subcategories/additive_subcategories.module';
import { DishesModule } from './dishes/dishes/dishes.module';
import { DishIngredientsModule } from './dishes/dish_ingredients/dish_ingredients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config/envs';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: envs.postgres.host,
      port: envs.postgres.port,
      username: envs.postgres.username,
      password: envs.postgres.password,
      database: envs.postgres.database,
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
    SubcategoriesModule,
    DishesModule,
    DishIngredientsModule,
    AdditiveIngredientsModule,
    AdditiveSubcategoriesModule,
    AdditivesModule,
    AdditiveSubcategoriesModule,
    SubcategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
