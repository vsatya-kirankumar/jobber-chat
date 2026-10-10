import { Application } from 'express';
import { healthRoutes } from '@chat/routes/health.routes';
import { verifyGatewayRequest } from '@vsatya-kirankumar/jobber-shared';
import { messageRoutes } from './routes/message.routes';

const BASE_PATH = '/api/v1/message';

export const appRoutes = (app: Application) => {
  app.use('', healthRoutes());
  app.use(BASE_PATH, verifyGatewayRequest, messageRoutes());
};
