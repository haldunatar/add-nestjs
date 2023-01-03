import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Add, AddSchema } from 'src/adds/schemas/add.schema';
import { AddController } from './controller/add.controller';
import { AddService } from './services/add.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Add.name, schema: AddSchema }])],
  controllers: [AddController],
  providers: [AddService],
})
export class AddModule {}
