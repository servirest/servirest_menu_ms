import { Entity, PrimaryGeneratedColumn, Column, OneToMany, DeleteDateColumn } from 'typeorm';
import { Subcategory } from '../../subcategories/entities/subcategory.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  category_name: string;

  @Column({ type: 'time' })
  start_time: string;

  @Column({ type: 'time' })
  end_time: string;

  @Column({ type: 'text', nullable: true })
  category_description: string | null;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  subcategories: Subcategory[] | null;
  
  @DeleteDateColumn()
  deletedAt : Date
}
