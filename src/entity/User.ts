import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Car from './Car';
import ConfirmMail from './ConfirmMail';
import Receipt from './Receipt';
import UserInfo from './UserInfo';



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
 
    @OneToMany(() => Receipt, (receipt) => receipt.user)
    receipts: Receipt[]
    
    @OneToMany(() => ConfirmMail, (confirmMail) => confirmMail.user)
    confirmMails: ConfirmMail[]

    @OneToMany(() => Car, (car) => car.users)
    cars: Car[];

    @ManyToOne(() => UserInfo, userInfo => userInfo.user)
    userInfo: UserInfo;

}