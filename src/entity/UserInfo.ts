import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import About from "./About";

// import ProfilePicture from "./ProfilePicture";
@Entity("user_info")
export default class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64, nullable: true })
  city: string;

  @Column({ length: 45, nullable: true })
  country: string;

  // max lenght 10
  @Column({ length: 100, nullable: true })
  address: string;

  @ManyToOne(() => About, (about) => about.userInfo, { eager: true })
  about: About;
}
