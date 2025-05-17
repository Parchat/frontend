import { IMessage } from './IMessage';

export interface IRoom {
  admins: string[];
  createdAt: Date;
  description: string;
  id: string;
  imageUrl: string;
  isDeleted: boolean;
  isPrivate: boolean;
  lastMessage: IMessage;
  members: string[];
  name: string;
  ownerId: string;
  updatedAt: Date;
}

export interface ICreateRoom {
  description: string;
  isPrivate: boolean;
  name: string;
  userIds: string[];
}
