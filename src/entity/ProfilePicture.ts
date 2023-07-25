import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import UserInfo from "./UserInfo";
import { on } from "events";


@Entity("profil_picture")
export default class ProfilPicture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;


  @OneToOne(() => UserInfo)
  @JoinColumn()
  userInfo: UserInfo;


}
