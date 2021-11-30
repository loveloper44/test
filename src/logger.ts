import { Injectable } from '@nestjs/common';
import { createLogger, format, Logger as WinstonLogger } from 'winston';

import { LoggingConfig } from '@app/config/LoggingConfig';

@Injectable()
export class Logger {
  private logger: WinstonLogger;
  private loggingConfig: LoggingConfig = new LoggingConfig();

  constructor() {
    this.logger = createLogger({
      level: 'info',
      exitOnError: false,
      format: format.json(),
    });
  }

  public debug(message: string, meta?: Record<string, unknown>): void {
    const flatMeta = typeof meta === 'object' ? meta : {};

    this.logger.debug(message, {
      dd: {
        service: this.loggingConfig.serviceName,
        env: this.loggingConfig.nodeEnv,
      },
      ...flatMeta,
    });
  }

  public info(message: string, meta?: Record<string, unknown>): void {
    const flatMeta = typeof meta === 'object' ? meta : {};

    this.logger.info(message, {
      dd: {
        service: this.loggingConfig.serviceName,
        env: this.loggingConfig.nodeEnv,
      },
      ...flatMeta,
    });
  }

  public warn(message: string, meta?: Record<string, unknown>): void {
    const flatMeta = typeof meta === 'object' ? meta : {};

    this.logger.warn(message, {
      dd: {
        service: this.loggingConfig.serviceName,
        env: this.loggingConfig.nodeEnv,
      },
      ...flatMeta,
    });
  }

  public error(message: string, meta?: Record<string, unknown>): void {
    const flatMeta = typeof meta === 'object' ? meta : {};

    this.logger.error(message, {
      dd: {
        service: this.loggingConfig.serviceName,
        env: this.loggingConfig.nodeEnv,
      },
      ...flatMeta,
    });
  }
}
