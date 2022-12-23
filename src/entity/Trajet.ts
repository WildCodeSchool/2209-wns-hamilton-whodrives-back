import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
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
    date_departure: Date;
    
    @Column()
    arrival_date: Date;
    
    @Column()
    hour_departure: Date;
    
    @ManyToMany(() => User)
    @JoinTable()
    User: User[]
}


