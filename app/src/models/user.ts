import { BaseModel, Message } from './all';

export class User extends BaseModel {
    email: string;
    alias: string;
    fullName: string;
    cpf: string;
    sentMessages: Promise<Message[]>;
    receivedMessages: Promise<Message[]>;
}