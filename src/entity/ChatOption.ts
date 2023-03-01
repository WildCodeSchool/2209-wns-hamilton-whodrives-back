import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import About from "./About";

@Entity("chat_option")
export default class ChatOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @OneToMany(() => About, (about) => about.chatOption)
  about: About;
}
