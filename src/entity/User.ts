import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import UserInfo from "./UserInfo";
import Badge from "./Badge";

@Entity("user")
export default class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @ManyToOne(() => UserInfo, userInfo => userInfo.user)
    userInfo: UserInfo;

   
}