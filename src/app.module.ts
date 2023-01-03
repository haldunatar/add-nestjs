import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddModule } from './adds/add.module';
import { AppController } from './app.controller';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODBURL), AddModule],
  controllers: [AppController],
})
export class AppModule {}
