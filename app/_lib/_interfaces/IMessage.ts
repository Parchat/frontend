export interface IMessage {
  id: string;
  content: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  isDeleted: boolean;
  roomId: string;
  userId: string;
  status?: 'pending' | 'delivered'; // Nuevo campo
}
