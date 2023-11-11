import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import CarPicture from "./CarPicture";
import Brand from "./Brand";
import User from "./User";

@Entity("car")
export default class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seat: number;

  @ManyToOne(() => User, (user) => user.cars)
  user: User;

  @OneToMany(() => CarPicture, (carPicture) => carPicture.car, { eager: true })
  carPictures: CarPicture[];

  @ManyToOne(() => Brand, (brand) => brand.cars, { eager: true })
  brand: Brand;
}
