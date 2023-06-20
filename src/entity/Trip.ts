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

  @Column()
  arrival_date: Date;

  @Column()
  price: number;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => User, {eager: true})
  @JoinTable()
  users: User[];
}
