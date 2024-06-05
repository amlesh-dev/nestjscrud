import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/DTO/login-dto';

@Injectable()
export class LoginService {
  private user = [];

  createUser(CreateUserDto: CreateUserDto) {
    this.user.push(CreateUserDto);
  }

  getUser() {
    return this.user;
  }
}
