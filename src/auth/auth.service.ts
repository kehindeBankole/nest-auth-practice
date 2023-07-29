import { Injectable } from '@nestjs/common';
import { UsersService, users } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async signUp(user: any) {
    const isUser = await this.usersService.findOne(user.username);
    if (isUser) {
      return 'user already exists';
    }
    const payload = { name: user.name, sub: user.id };
    users.push({ ...user, userId: 3 });
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
