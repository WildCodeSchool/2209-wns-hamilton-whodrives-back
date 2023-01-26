import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Car from './Car';

@Entity("options")
export default class Options {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    air_conditioner: boolean;

    @OneToOne(() => Car, (car) => car.options)
    car: Car;

}
