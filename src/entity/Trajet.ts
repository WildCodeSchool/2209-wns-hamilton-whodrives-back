import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany } from "typeorm";
import User from "./User"

@Entity("trajet")
export default class Trajet {

    @PrimaryGeneratedColumn()
    id: number;
       
    @Column()
    departure_places: string;
    
    @Column()
    destination: string;
    
    @Column()
    date_departure: string;
    
    @Column()
    arrival_date: string;
    
    @Column()
    hour_departure: string;
    
    @ManyToMany(() => User)
    @JoinTable()
    User: User[]
}


