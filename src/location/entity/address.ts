import { Country } from './country';
import { City } from './city';
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { State } from './state';

export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 256 })
  house_number: number;

  @Column({ nullable: false, length: 256 })
  street_name: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @OneToOne(() => City)
  @JoinColumn()
  city: City;

  @OneToOne(() => State)
  @JoinColumn()
  state: State;

  @OneToOne(() => Country)
  @JoinColumn()
  country: Country;
}
