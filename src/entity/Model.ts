import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Car from './Car';

@Entity("model")
export default class Model {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    seat: number;

    @OneToMany(() => Car, (car) => car.model)
    cars: Car[];

}