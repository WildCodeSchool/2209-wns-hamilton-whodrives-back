import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Car from "./Car";

@Entity("carPicture")
export default class CarPicture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @OneToMany(() => Car, (car) => car.carPictures)
  car: Car;
}
