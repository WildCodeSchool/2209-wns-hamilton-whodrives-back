import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
import User from "./User"

@Entity("rating")
export default class Rating {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    note: number;
    
    @Column({length: 255})
    content: string;

    @ManyToMany(() => User)
    @JoinTable()
    User: User[]
}

