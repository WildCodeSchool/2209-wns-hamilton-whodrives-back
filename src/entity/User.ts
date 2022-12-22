import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import UserInfo from "./UserInfo";
import Badge from "./Badge";
import Rating from "./Rating";
import Receipt from "./Receipt";
import ConfirmMail from "./ConfirmMail";

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

    @ManyToOne(() => UserInfo, userInfo => userInfo.user)
    userInfo: UserInfo;

}