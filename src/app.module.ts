import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Energisa } from './Modules/Energisa';


@Module({
  imports: [Energisa],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
