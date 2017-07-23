import {
    Entity,
    Column,
    OneToMany
} from "typeorm";
import { BaseModel, Suffix } from './models';

@Entity()
export class SuffixCategory extends BaseModel {
    @Column()
    name: string;

    @OneToMany(type => Suffix, sufix => sufix.category, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    suffixes: Promise<Suffix[]>;
}