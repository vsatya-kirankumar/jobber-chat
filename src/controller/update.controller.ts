import { IMessageDocument } from '@vsatya-kirankumar/jobber-shared';
import { Request, Response } from 'express';
import { markManyMessagesAsRead, markMessageAsRead, updateOffer } from '@chat/services/message.service';
import { StatusCodes } from 'http-status-codes';

export const offer = async (req: Request, res: Response): Promise<void> => {
  const { messageId, type } = req.body;

  const message: IMessageDocument = await updateOffer(messageId, type);
  res.status(StatusCodes.OK).json({ message: 'Message Updated', singleMessage: message });
};

export const markMultipleMessages = async (req: Request, res: Response): Promise<void> => {
  const { messageId, senderUsername, receiverUsername } = req.body;

  await markManyMessagesAsRead(senderUsername, receiverUsername, messageId);
  res.status(StatusCodes.OK).json({ message: 'Messages marked as read.' });
};

export const markSingleMessage = async (req: Request, res: Response): Promise<void> => {
  const { messageId } = req.body;

  const message: IMessageDocument = await markMessageAsRead(messageId);
  res.status(StatusCodes.OK).json({ message: 'Message marked as read', singleMessage: message });
};
