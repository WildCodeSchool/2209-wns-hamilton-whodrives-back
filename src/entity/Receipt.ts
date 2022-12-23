import { Entity, PrimaryGeneratedColumn, Column, OneToMany,ManyToOne, JoinTable, ManyToMany } from "typeorm";
import User from "./User"

@Entity("receipts")
export default class Receipts {

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    file_name: string;


    @ManyToOne(() => User, (user) => user.receipts)
    user: User[];
}
