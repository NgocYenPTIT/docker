import { Injectable } from '@nestjs/common';
import { UserDAO } from 'src/database/DAOs/user.dao';

@Injectable()
export class UserService {
  constructor(private readonly userDAO: UserDAO) {}
  async say() {
    console.log(await this.userDAO.findOne({ where: { id: 1 } }));
    return 1;
  }
}
