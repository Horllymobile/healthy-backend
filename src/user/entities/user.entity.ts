import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, nullable: false })
  first_name: string;

  @Column({ length: 50, nullable: false })
  last_name: string;

  @Column({ length: 256, nullable: false, unique: true })
  email: string;

  @Column({ length: 512, nullable: false })
  password: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @Column({ type: 'date' })
  last_login: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    await bcrypt.hash(this.password, salt);
  }
}
