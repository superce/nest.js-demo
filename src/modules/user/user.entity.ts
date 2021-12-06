import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, VersionColumn, } from "typeorm";

@Entity()
export class User {
    // 主键id
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column ("text")
    userName: String

    @Column ("text")
    passWord: String

    // 创建时间
    @CreateDateColumn()
    createTime: Date
}