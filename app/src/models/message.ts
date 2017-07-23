import { BaseModel, User, Prefix, Suffix } from './all';

export enum MessageStatusEnum {
    Sent = 0,
    Received = 1,
    Seen = 2,
    Error = 99
}

export enum MessageTypeEnum {
    Sent = 0,
    Received = 1,
    Rejected = 2
}

export class Message extends BaseModel {
    userFrom: Promise<User>;
    userTo: Promise<User | null>;
    smsPhoneNumberTo: string;
    prefix: Promise<Prefix>;
    suffix: Promise<Suffix>;
    status: MessageStatusEnum;
    type: MessageTypeEnum;
}