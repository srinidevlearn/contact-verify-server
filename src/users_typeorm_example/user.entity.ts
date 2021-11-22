import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  primaryMobileNumber: string;

  @Column()
  primaryEmailId: string;

  @Column()
  secondaryMobileNumber: string;
  @Column()
  secondaryEmailId: string;

  @Column()
  gender: string;

  @Column({ default: true })
  isActive: boolean;
}
