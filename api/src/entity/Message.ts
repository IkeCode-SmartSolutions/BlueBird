import {
    Entity,
    Column,
    ManyToOne, OneToMany,
    JoinColumn
} from "typeorm";
import { BaseModel, Suffix, Prefix, User } from './models';

export enum MessageStatusEnum {
    Sent = 0,
    Received = 1,
    Seen = 2,
    Error = 99
}

export enum MessageTypeEnum{
    Sent = 0,
    Received = 1,
    Rejected = 2
}

@Entity()
export class Message extends BaseModel {
    @ManyToOne(type => User, t => t.sentMessages, { nullable: false })
    userFrom: Promise<User>;

    @ManyToOne(type => User, t => t.receivedMessages, { nullable: false })
    userTo: Promise<User>;

    @ManyToOne(type => Prefix, { nullable: false })
    @JoinColumn()
    prefix: Promise<Prefix>;

    @ManyToOne(type => Suffix, { nullable: false })
    @JoinColumn()
    suffix: Promise<Suffix>;

    @Column("int", { nullable: false })
    status: MessageStatusEnum;

    @Column("int", { nullable: false })
    type: MessageTypeEnum;
}