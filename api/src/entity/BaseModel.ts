import {
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
    AbstractEntity
} from "typeorm";
import { User } from './models';

@AbstractEntity()
export class BaseModel {
    @PrimaryColumn("int", { generated: true })
    id: number;

    @CreateDateColumn()
    createdAt: number;

    @UpdateDateColumn()
    updatedAt: number;

    @ManyToOne(type => User, { cascadeInsert: true, cascadeUpdate: true })
    owner: Promise<User | null>;
}