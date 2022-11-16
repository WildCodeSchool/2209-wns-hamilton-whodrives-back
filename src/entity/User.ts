import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("user")
export default class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    birthday: Date;
}