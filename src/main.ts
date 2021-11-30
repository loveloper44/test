import 'source-map-support/register';
import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import { AppModule } from '@app/AppModule';
import { Logger } from '@app/logger';
import { AppService } from '@app/application/AppService';

let app: INestApplication | null = null;

export const handler = async (event: any) => {
  let logger: Logger | null = null;
  let appService: AppService | null = null;

  if (!app) {
    app = await NestFactory.create(AppModule);
    await app.init();
  }

  logger = app.get<Logger>(Logger);
  appService = app.get<AppService>(AppService);

  let result = null;

  try {
    result = await appService.handle();
  } catch (err) {
    logger.error(err.message, {
      err,
      stackTrace: err.stack,
      metadata: err.metadata,
      event,
    });
  }

  return result;
};
