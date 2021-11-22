import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ConfigEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  smsFeature: boolean;

  @Column({ default: false })
  emailFeature: boolean;

  @Column({ default: false })
  calendarFeature: boolean;

  @Column({ default: false })
  voiceCallFeature: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
