import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Car from './Car';

@Entity("option")
export default class Option {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    air_conditioner: boolean;

    @OneToMany(() => Car, (car) => car.option)
    cars: Car[];

}
