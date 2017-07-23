import { BaseModel, Prefix } from './all';

export class PrefixCategory extends BaseModel {
    name: string;
    prefixes: Prefix[];
}