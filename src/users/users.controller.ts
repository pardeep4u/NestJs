import {
    Controller,
    Body,
    Param,
    Patch,
    UseInterceptors,
    ClassSerializerInterceptor,
} from '@nestjs/common';
import { Get, Query } from '@nestjs/common/decorators';
import {
    Delete,
    Post,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { CreateUserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class UsersController {
    constructor(
        private userService: UsersService,
        private authSerive: AuthService,
    ) {}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        console.log(body);
        this.authSerive.signup(body.email, body.password);
    }

    @Post('/signin')
    logIn(@Body() body: CreateUserDto) {
        return this.authSerive.signin(body.email, body.password);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:id')
    findUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id));
    }

    @Get()
    findAllUser(@Query('email') email: string) {
        return this.userService.find(email);
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.userService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.userService.update(parseInt(id), body);
    }
}
