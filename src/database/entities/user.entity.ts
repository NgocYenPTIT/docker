import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base/base.entity';
@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ type: 'int', unsigned: true })
  migrationColunm: number;
}
