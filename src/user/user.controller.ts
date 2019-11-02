import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Get('login')
    login(@Req() request: Request) {
        console.log(request.body);
        return { user: 1, name: 'test' };
    }

}
