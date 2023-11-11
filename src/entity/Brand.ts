import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import Car from "./Car";

@Entity("brand")
export default class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Car, (car) => car.brand)
  cars: Car[];
}
