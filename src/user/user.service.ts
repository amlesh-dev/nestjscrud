// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../DTO/user.interface';
import { CreateUserDto } from '../DTO/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, createUserDto: CreateUserDto): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, createUserDto, { new: true })
      .exec();
  }

  //   async remove(id: string): Promise<User> {
  //     return this.userModel.findByIdAndRemove(id).exec();
  //   }
}
