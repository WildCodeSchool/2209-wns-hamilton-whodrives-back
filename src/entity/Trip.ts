import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity("trip")
export default class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  departure_places: string;

  @Column()
  destination: string;

  @Column()
  date_departure: Date;

  @Column({  type: 'time',nullable: true,  })
  hour_departure: string;
  
  @Column({default: 0})
  place_available: number;

  @Column()
  arrival_date: Date;

  @Column()
  price: number;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => User  , user => user.trips, {eager: true})
  @JoinTable()
  users: User[];

  @ManyToMany(() => User, user => user.passengerTrips, {eager: true})
  @JoinTable()
  passengers: User[];
}
