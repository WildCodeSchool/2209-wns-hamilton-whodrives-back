
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import User from "./User";
import UserInfo from "./UserInfo";

@Entity("badge")
export default class Badge {
    
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        name: string;
    
        @Column()
        description: string;

        @ManyToMany(() => UserInfo)
        @JoinTable()
        userInfo: UserInfo[];

    }