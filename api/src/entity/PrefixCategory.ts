import {
    Entity,
    Column,
    ManyToOne, OneToMany
} from "typeorm";
import { BaseModel, Prefix } from './models';

@Entity()
export class PrefixCategory extends BaseModel {
    @Column()
    name: string;

    @OneToMany(type => Prefix, sufix => sufix.category, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    prefixes: Promise<Prefix[]>;
}