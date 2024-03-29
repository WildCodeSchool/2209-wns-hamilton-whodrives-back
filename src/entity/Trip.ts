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
  departure_place: string;

  @Column()
  destination: string;

  @Column()
  departure_date: Date;

  @Column({ type: "time", nullable: true })
  departure_hour: string;

  @Column({ default: 0 })
  available_seat: number;

  @Column()
  arrival_date: Date;

  @Column()
  price: number;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => User, (user) => user.trips, { eager: true })
  @JoinTable()
  users: User[];

  @ManyToMany(() => User, (user) => user.passengerTrips, { eager: true })
  @JoinTable()
  passengers: User[];
}
