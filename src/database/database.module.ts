import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'src/config/typeORM.config';
import { DAOs } from './DAOs';
@Global()
@Module({
  imports: [TypeOrmModule.forRoot(ormConfig)],
  providers: DAOs,
  exports: DAOs,
})
export class DatabaseModule {}
