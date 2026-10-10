import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getConversation, getMessages, getUserConversationList, getUserMessages } from '@chat/services/message.service';
import { IConversationDocument, IMessageDocument } from '@vsatya-kirankumar/jobber-shared';

const conversation = async (req: Request, res: Response): Promise<void> => {
  const { senderUsername, receiverUsername } = req.params;
  const conversations: IConversationDocument[] = await getConversation(senderUsername as string, receiverUsername as string);
  res.status(StatusCodes.OK).json({ message: 'Chat conversation', conversations });
};

const messages = async (req: Request, res: Response): Promise<void> => {
  const { senderUsername, receiverUsername } = req.params;
  const messages: IMessageDocument[] = await getMessages(senderUsername as string, receiverUsername as string);
  res.status(StatusCodes.OK).json({ message: 'Chat Messages', messages });
};

const conversationList = async (req: Request, res: Response): Promise<void> => {
  const { username } = req.params;

  const messages: IMessageDocument[] = await getUserConversationList(username as string);
  res.status(StatusCodes.OK).json({ message: 'Conversation List', messages });
};

const userMessages = async (req: Request, res: Response): Promise<void> => {
  const { conversationId } = req.params;

  const messages: IMessageDocument[] = await getUserMessages(conversationId as string);
  res.status(StatusCodes.OK).json({ message: 'User Conversation List', messages });
};

export { conversation, messages, conversationList, userMessages };
