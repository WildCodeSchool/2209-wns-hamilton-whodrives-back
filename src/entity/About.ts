import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import ChatOption from "./ChatOption";
import MusicOption from "./MusicOption";
import UserInfo from "./UserInfo";

@Entity("about")
export default class About {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  animal: boolean;

  @Column()
  description: string;

  @Column()
  cigarette: boolean;

  @ManyToOne(() => ChatOption, (chatOption) => chatOption.about, {
    nullable: true,
    eager: true,
  })
  chatOption?: ChatOption;

  @ManyToOne(() => MusicOption, (musicOption) => musicOption.about, {
    nullable: true,
    eager: true,
  })
  musicOption?: MusicOption;

  @OneToMany(() => UserInfo, (userInfo) => userInfo.about)
  userInfo: UserInfo[];
}
