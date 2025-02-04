import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ISearchQuery, SearchQuery } from 'src/common/decorator/search-query.decorator';
import { UserDAO } from 'src/database/DAOs/user.dao';

@Controller('/user')
export class UserController {
  constructor(private readonly userDAO: UserDAO) {}

  @Get()
  async say(@SearchQuery() searchQuery: ISearchQuery) {
    console.log(searchQuery);
    const query = this.userDAO.createQueryBuilder();
    query.where(searchQuery.query, searchQuery.params);
    const result = await query.getMany();
    console.log(result);
    return `Hello, ${searchQuery}`;
  }
}
