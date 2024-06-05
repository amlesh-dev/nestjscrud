import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/DTO/login-dto';
import { LoginService } from 'src/Services/login.service';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    this.loginService.createUser(CreateUserDto);
  }

  @Get()
  getUserDetails() {
    return this.loginService.getUser();
  }
}
