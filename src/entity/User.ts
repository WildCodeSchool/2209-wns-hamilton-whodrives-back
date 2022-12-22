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

<<<<<<< HEAD
    // @Column()
    // birthday: Date;

    @OneToMany(() => Car, (car) => car.users)
    cars: Car[];
=======
    @Column({nullable: true})
    birthday: Date;
>>>>>>> c637447b35d93f3ac750af76941ff55e9de9ffb8
}