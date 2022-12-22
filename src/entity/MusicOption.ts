import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import About from "./About";


@Entity("music_option")
export default class MusicOption {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @OneToMany(() => About , about => about.musicOption)
    about: About[];

}