import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import CarPicture from "./CarPicture";
import Model from "./Model";
import Options from "./Option";
import User from "./User";

@Entity("car")
export default class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seat: number;

  @ManyToOne(() => User, (user) => user.cars)
  user: User;

  @OneToMany(() => CarPicture, (carPicture) => carPicture.cars, { eager: true })
  carPictures: CarPicture[];

  @OneToOne(() => Options, (options) => options.car)
  @JoinColumn()
  options: Options;

  @ManyToOne(() => Model, (model) => model.cars, { eager: true })
  model: Model;
}
