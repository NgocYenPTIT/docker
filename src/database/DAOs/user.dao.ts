import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { BaseDAO } from './base/base.dao';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class UserDAO extends BaseDAO<UserEntity> {
  protected readonly alias = 'users';
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }
}
