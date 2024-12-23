import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Additive } from '../../additives/entities/additive.entity';
import { Subcategory } from '../../../subcategories/entities/subcategory.entity';

@Entity('additive_subcategories')
export class AdditiveSubcategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Additive, (additive) => additive.additiveSubcategories)
  @JoinColumn({ name: 'additive_id' })
  additive: Additive;

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.additiveSubcategories)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: Subcategory;
}
