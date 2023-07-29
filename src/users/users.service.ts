import { Injectable } from '@nestjs/common';

export const users = [
  {
    userId: 1,
    username: 'john',
    password: 'changeme',
  },
  {
    userId: 2,
    username: 'maria',
    password: 'guess',
  },
];

export type User = (typeof users)[0];

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }
}
