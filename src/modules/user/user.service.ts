import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO, IdDTO, nameDTO } from './dto/index'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { User } from './user.entity'
@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>,
    ){}
    async createUser( CreateUserDTO:CreateUserDTO ):Promise<User>{
        const saveUser = new User()
        const { userName, passWord } = CreateUserDTO
        saveUser.userName = userName
        saveUser.passWord = passWord
        // console.log('getOne调用');
        const one = await this.UserRepository.createQueryBuilder('user').where('user.userName = :userName',{ userName }).getOne()
        let result:any = {}
        if(one){
            throw new NotFoundException('用户名重复')
            
        }else{
            result = await this.UserRepository.save(saveUser)
        }
        
        return result
    }
    async getOne ( nameDTO:nameDTO ) {
        console.log('getOne--------', nameDTO);
        
    }
    async deleteUser (IdDTO:IdDTO){
        console.log('删除', IdDTO);
        const { id } = IdDTO
        const deleteResult = await this.UserRepository.delete({ id })
        if(deleteResult.affected === 0){
            throw new NotFoundException('删除失败')
        }else{
            const { code, message }:any = deleteResult
            
            console.log(code, message);
            
        }
        
    }
}
