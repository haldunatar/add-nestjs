import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddDocument = Add & Document;

@Schema({ collection: 'adds' })
export class Add {
  @Prop({ required: true })
  type: string;
  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
  @Prop({ required: true })
  price: string;
}

export const AddSchema = SchemaFactory.createForClass(Add);
