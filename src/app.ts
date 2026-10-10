import { config } from '@chat/config';
import { databaseConnection } from '@chat/database';
import express, { Express } from 'express';
import { start } from '@chat/server';

const initialize = (): void => {
  config.cloudinaryConfig();
  const app: Express = express();
  databaseConnection();
  start(app);
};

initialize();
