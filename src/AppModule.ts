import { Module } from '@nestjs/common';

import { AppService } from '@app/application/AppService';

@Module({
  imports: [],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
