import { Entity, PrimaryGeneratedColumn, Column, OneToMany,ManyToOne, JoinTable, ManyToMany } from "typeorm";
import User from "./User"

@Entity("confirmMail")
export default class ConfirmMail {

    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(() => User, (user) => user.confirmMails)
    user: User[];
}
