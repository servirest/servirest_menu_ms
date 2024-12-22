import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Dish } from '../../dishes/entities/dish.entity';

@Entity('dish_ingredients')
export class DishIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Dish, (dish) => dish.dishIngredients)
  @JoinColumn({ name: 'dish_id' })
  dish: Dish;
  
  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'boolean', default: true })
  visible: boolean;

  @Column({ type: 'int', name: 'ingredient_id', nullable:true })
  ingredient_id: number;
}
