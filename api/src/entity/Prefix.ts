import {
    Entity,
    Column,
    ManyToOne, OneToMany
} from "typeorm";
import { BaseModel, PrefixCategory } from './models';

@Entity()
export class Prefix extends BaseModel {
    @Column()
    name: string;

    @ManyToOne(type => PrefixCategory, cat => cat.prefixes, { nullable: false })
    category: Promise<PrefixCategory>;
}