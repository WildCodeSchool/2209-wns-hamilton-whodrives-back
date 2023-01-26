import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import About from './About';
import ProfilPicture from './ProfilPicture';
import User from './User';

@Entity("user_info")
export default class UserInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 64})
    city: string;

    @Column({length: 45})
    country: string;

    @Column({length: 45})
    firstname: string;

    @Column({length: 45})
    lastname: string;

    @Column()
    age: number;

    @Column({nullable: true})
    birthday: Date;

    // max lenght 10
    @Column({length: 100})
    address: string;

    @ManyToOne(() => ProfilPicture, profilPicture => profilPicture.userInfo)
    profilPicture: ProfilPicture[];

    @ManyToOne(() => About, about => about.userInfo)
    about: About[];

    @OneToMany(() => User , user => user.userInfo)
    user: User[];

}
