import { BaseModel, SuffixCategory } from './all';

export class Suffix extends BaseModel {
    name: string;
    category: SuffixCategory;
}