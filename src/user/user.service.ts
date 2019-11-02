import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    users: User[] = [];

    login(user: User) {
        return this.users.find(u => u.email === user.email)
    }

    register(user: User) {
        this.users.push(user)
    }

    getAllUsers() {
        return this.users;
    }
}
