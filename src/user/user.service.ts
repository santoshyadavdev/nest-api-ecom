import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { UserDto } from './user-info';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    users: User[] = [];

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    login(user: User) {
        return this.users.find(u => u.email === user.email)
    }

    async register(userDto: UserDto): Promise<User> {
        const user = new this.userModel(userDto)
        return await user.save();
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find().exec();
    }
}
