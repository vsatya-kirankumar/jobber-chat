import { Router } from 'express';
import express from 'express';
import { conversation, conversationList, messages, userMessages } from '@chat/controller/get.controller';
import { message } from '@chat/controller/create.controller';
import { markSingleMessage, offer, markMultipleMessages } from '@chat/controller/update.controller';

const router: Router = express.Router();

const messageRoutes = (): Router => {
  router.get('/conversation/:sendUsername/:receiverUsername', conversation);
  router.get('/:sendUsername/:receiverUsername', messages);
  router.get('/conversations/:username', conversationList);
  router.get('/:conversationId', userMessages);
  router.post('/', message);
  router.put('/offer', offer);
  router.put('/mark-as-read', markSingleMessage);
  router.put('/mark-multiple-as-read', markMultipleMessages);

  return router;
};

export { messageRoutes };
