import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AdditiveIngredient } from '../../additive_ingredients/entities/additive_ingredient.entity';
import { AdditiveSubcategory } from '../../additive_sub_categories/entities/additive_sub_category.entity';

@Entity('additives')
export class Additive {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  additive_name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  discount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  iva: number;

  @Column({ type: 'text' })
  additive_description: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => AdditiveIngredient, (additiveIngredient) => additiveIngredient.additive)
  additiveIngredients: AdditiveIngredient[];

  @OneToMany(() => AdditiveSubcategory, (additiveSubcategory) => additiveSubcategory.additive)
  additiveSubcategories: AdditiveSubcategory[];
}
