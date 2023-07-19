import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import About from "./About";
import ProfilPicture from "./ProfilePicture";
import User from "./User";

@Entity("user_info")
export default class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64, nullable : true})
  city: string;

  @Column({ length: 45, nullable : true })
  country: string;

  // max lenght 10
  @Column({ length: 100, nullable : true })
  address: string;

  @ManyToOne(() => ProfilPicture, (profilPicture) => profilPicture.userInfo)
  profilPicture: ProfilPicture[];

  @ManyToOne(() => About, (about) => about.userInfo , {eager: true})
  about: About;

  @OneToMany(() => User, (user) => user.userInfo)
  user: User[];
}
