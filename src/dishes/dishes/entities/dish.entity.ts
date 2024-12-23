import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Subcategory } from '../../../subcategories/entities/subcategory.entity';
import { DishIngredient } from '../../dish_ingredients/entities/dish_ingredient.entity';

@Entity('dishes')
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.dishes)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: Subcategory;

  @Column({ type: 'varchar', length: 100 })
  dish_name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  discount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  iva: number;

  @Column({ type: 'text' })
  dish_description: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => DishIngredient, (dishIngredient) => dishIngredient.dish)
  dishIngredients: DishIngredient[];
}
