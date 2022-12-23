import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';

@Entity("confirmMail")
export default class ConfirmMail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dateTime: Date;

    @Column()
    idConfirmation: string;

    @ManyToOne(() => User, (user) => user.confirmMails)
    user: User[];
    
}
