import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import UserInfo from "./UserInfo";

@Entity("profil_picture")
export default class ProfilPicture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @OneToOne(() => UserInfo, { eager: true })
  @JoinColumn()
  userInfo: UserInfo;
}
