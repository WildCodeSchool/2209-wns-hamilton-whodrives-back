import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import UserInfo from './UserInfo';

@Entity("profile_picture")
export default class ProfilPicture {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    path: string;

    @OneToMany(() => UserInfo, userInfo => userInfo.profilPicture)
    userInfo: UserInfo[];
       
}
    