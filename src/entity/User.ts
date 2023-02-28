import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Car from "./Car";
import ConfirmMail from "./ConfirmMail";
import Receipt from "./Receipt";
import UserInfo from "./UserInfo";

@Entity("user")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ length: 45, nullable: true })
  firstname: string;

  @Column({ length: 45, nullable: true })
  lastname: string;

  @Column({ nullable: true })
  date_of_birth: Date;

  @Column({ length: 140 })
  password: string;

  //email is unique
  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @OneToMany(() => Receipt, (receipt) => receipt.user)
  receipts: Receipt[];

  @OneToMany(() => ConfirmMail, (confirmMail) => confirmMail.user)
  confirmMails: ConfirmMail[];

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];

  @ManyToOne(() => UserInfo, (userInfo) => userInfo.user)
  userInfo: UserInfo;
}
