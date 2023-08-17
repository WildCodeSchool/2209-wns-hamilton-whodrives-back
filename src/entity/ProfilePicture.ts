import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import UserInfo from "./UserInfo";

@Entity("profile_picture")
export default class ProfilePicture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @OneToOne(() => UserInfo, { eager: true })
  @JoinColumn()
  userInfo: UserInfo;
}
