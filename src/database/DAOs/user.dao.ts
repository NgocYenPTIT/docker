import { Injectable } from '@nestjs/common';
import { BaseDAO } from './base/base.dao';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { UserEntity } from '../entities';

@Injectable()
export class UserDAO extends BaseDAO<UserEntity> {
  protected readonly alias = 'users';
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }
}
