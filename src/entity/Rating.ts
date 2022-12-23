import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany } from "typeorm";
import User from "./User"

@Entity("rating")
export default class Rating {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    note: number;
    
    @Column()
    content: string;

    @ManyToMany(() => User)
    @JoinTable()
    User: User[];
}

