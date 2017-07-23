import { BaseModel, PrefixCategory } from './all';

export class Prefix extends BaseModel {
    name: string;
    category: PrefixCategory;
}