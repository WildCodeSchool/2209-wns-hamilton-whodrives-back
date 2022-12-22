import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import ProfilPicture from "./ProfilPicture";
import User from "./User";
import Badge from "./Badge";
import ChatOption from "./ChatOption";
import About from "./About";

@Entity("user_info")
export default class UserInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    age: string

    @Column({nullable: true})
    birthday: Date;

    @Column()
    phone: string;

    @Column()
    address: string;

    @ManyToOne(() => ProfilPicture, profilPicture => profilPicture.userInfo)
    profilPicture: ProfilPicture;

    @ManyToOne(() => About, about => about.userInfo)
    about: About;

    @OneToMany(() => User , user => user.userInfo)
    user: User[];

   


   
    
}