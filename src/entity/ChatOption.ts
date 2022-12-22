import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import UserInfo from "./UserInfo";
import About from "./About";

@Entity("chat_option")
export default class ChatOption {
    
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        content: string;

        @OneToMany(() => About, about => about.chatOption)
        about: About[];
    
    }