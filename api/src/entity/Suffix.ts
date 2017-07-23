import {
    Entity,
    Column,
    ManyToOne
} from "typeorm";
import { BaseModel, SuffixCategory } from './models';

@Entity()
export class Suffix extends BaseModel {
    @Column()
    name: string;

    @ManyToOne(type => SuffixCategory, cat => cat.suffixes, { nullable: false })
    category: Promise<SuffixCategory>;
}