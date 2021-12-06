import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, IdDTO } from './dto/index'

@Controller('user')
export class UserController {
    constructor(
        private UserService: UserService
    ){}
    @Post('create')
    create( @Body() CreateUserDTO:CreateUserDTO ){
        return this.UserService.createUser(CreateUserDTO)
    }
    @Post('delete')
    delete( @Body() IdDTO:IdDTO){
        return this.UserService.deleteUser(IdDTO)
    }
}
