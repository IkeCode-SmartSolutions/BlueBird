import { BaseModel, Suffix } from './all';

export class SuffixCategory extends BaseModel {
    name: string;
    prefixes: Suffix[];
}