import { BaseEntity } from 'src/database/entities';
import { Repository, SelectQueryBuilder } from 'typeorm';

export abstract class BaseDAO<T extends BaseEntity> extends Repository<T> {
  protected readonly alias: string;
  createQueryBuilder(): SelectQueryBuilder<T> {
    return super.createQueryBuilder(this.alias);
  }
}
