import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import UserInfo from "./UserInfo";

@Entity("badge")
export default class Badge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => UserInfo)
  @JoinTable()
  userInfo: UserInfo[];
}
