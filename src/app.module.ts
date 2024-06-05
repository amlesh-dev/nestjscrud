import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './Services/login.service';
import { LoginController } from './Controller/login.controller';

@Module({
  imports: [],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
