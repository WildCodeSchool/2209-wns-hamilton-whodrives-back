import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import Model from "./Model";
import User from "./User";
import Option from "./Option";
import CarPicture from "./CarPicture";

@Entity("car")
export default class Car {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    seat: number;

    @ManyToOne(() => User, (user) => user.cars)
    user: User[];

    @OneToMany(() => CarPicture, (carPicture) => carPicture.cars)
    carPictures: CarPicture[];

    @ManyToOne(() => Option, (option) => option.cars)
    option: Option[];

    @ManyToOne(() => Model, (model) => model.cars)
    model: Model[];

}