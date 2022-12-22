import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Rating from "./Rating";
import Receipt from "./Receipt";
import ConfirmMail from "./ConfirmMail";

@Entity("user")
export default class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    // @Column()
    // firstname: string;

    // @Column()
    // lastname: string;

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
    // @Column()
    // address: string;

    // @Column({nullable: true})
    // birthday: Date;
}