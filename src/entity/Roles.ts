import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany } from "typeorm";
import User from "./User"

@Entity("roles")
export default class Roles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
       
    @ManyToMany(() => User)
    @JoinTable()
    User: User[];

}
