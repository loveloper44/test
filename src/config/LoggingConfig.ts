import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingConfig {
  public readonly serviceName: string = process.env.DD_SERVICE as string;

  public readonly nodeEnv: string = process.env.NODE_ENV as string;

  public readonly dataDogAPIKey: string = process.env
    .DATA_DOG_API_KEY as string;
}
