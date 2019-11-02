import { Controller, Get, Req, Post, Body, Param } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UserDto } from './user-info';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Post('login')
    login(@Body() user: UserDto) {
        this.userService.login(user);
        return { user: 1, name: 'test' };
    }

    @Post('register')
    register(@Body() user: UserDto) {
        this.userService.register(user)
        console.log(user);
        return 'success';
    }

    @Get('users')
    getAll() {
        return this.userService.getAllUsers();
    }
}
