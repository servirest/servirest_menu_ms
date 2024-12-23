import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Additive } from '../../additives/entities/additive.entity';


@Entity('additive_ingredients')
export class AdditiveIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Additive, (additive) => additive.additiveIngredients)
  @JoinColumn({ name: 'additive_id' })
  additive: Additive;


  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'boolean', default: true })
  visible: boolean;
  
  @Column({ type: 'int', name: 'ingredient_id', nullable:true })
  ingredient_id: number;
}
