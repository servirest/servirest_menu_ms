import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { Dish } from '../../dishes/entities/dish.entity';
import { AdditiveSubcategory } from '../../additive_sub_categories/entities/additive_sub_category.entity';

@Entity('subcategories')
export class Subcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category, (category) => category.subcategories)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({ type: 'varchar', length: 50 })
  subcategory_name: string;

  @Column({ type: 'text' })
  subcategory_description: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => Dish, (dish) => dish.subcategory)
  dishes: Dish[];

  @OneToMany(() => AdditiveSubcategory, (additiveSubcategory) => additiveSubcategory.subcategory)
  additiveSubcategories: AdditiveSubcategory[];
}
