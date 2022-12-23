import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,} from "typeorm";
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
        smoke: boolean;

        @ManyToOne(() => ChatOption, chatOption => chatOption.about)
        chatOption: ChatOption;

        @ManyToOne(() => MusicOption, musicOption => musicOption.about)
        musicOption: MusicOption;

        @OneToMany(() => UserInfo, userInfo => userInfo.about)
        userInfo: UserInfo[];
    
    }

