import { User } from './all';

export class BaseModel {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    owner: User;
}