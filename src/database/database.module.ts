import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin123@cluster0.gqfzszf.mongodb.net/nestcrud?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
})
export class DatabaseModule {}
