import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Car from "./Car";
import Trip from "./Trip";
import UserInfo from "./UserInfo";

@Entity("user")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ length: 45, nullable: true })
  firstname: string;

  @Column({ length: 45, nullable: true })
  lastname: string;

  @Column({ nullable: true })
  date_of_birth: Date;

  @Column({ length: 140 })
  password: string;

  //email is unique
  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @OneToMany(() => Car, (car) => car.user, { eager: true })
  cars: Car[];

  @OneToOne(() => UserInfo, { eager: true })
  @JoinColumn()
  userInfo: UserInfo;

  @ManyToMany(() => Trip, (trip) => trip.users)
  trips: Trip[];

  @ManyToMany(() => Trip, (trip) => trip.users)
  driverTrips: Trip[];

  @ManyToMany(() => Trip, (trip) => trip.passengers)
  passengerTrips: Trip[];
}
