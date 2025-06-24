import { IMessage } from './IMessage';

export interface IChat {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  isDeleted: boolean;
  lastMessage?: IMessage;
  userIds: string[];
}
