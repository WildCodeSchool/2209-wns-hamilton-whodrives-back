import { OneToMany } from 'typeorm';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import Car from './Car';

@Entity("user")
export default class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    // @Column()
    // firstname: string;

    // @Column()
    // lastname: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    // @Column()
    // address: string;

    // @Column()
    // birthday: Date;

    @OneToMany(() => Car, (car) => car.users)
    cars: Car[];
}