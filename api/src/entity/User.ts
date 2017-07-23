import {
    Entity,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    OneToMany, ManyToOne
} from "typeorm";
import { BaseModel, Message } from './models';

@Entity()
export class User extends BaseModel {
    @Column()
    email: string;

    @Column()
    alias: string;

    @Column()
    fullName: string;

    @Column()
    cpf: string;

    @OneToMany(type => Message, t => t.userFrom)
    sentMessages: Promise<Message[]>;
    
    @OneToMany(type => Message, t => t.userTo)
    receivedMessages: Promise<Message[]>;
}