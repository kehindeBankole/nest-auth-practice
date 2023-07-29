import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getUsers() {
    return 12;
  }
}
