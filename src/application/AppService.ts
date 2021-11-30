import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async handle(): Promise<string> {
    return 'test';
  }
}
