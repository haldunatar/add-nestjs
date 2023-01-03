import { Injectable, Query, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddDeleteDto, AddDto, AddUpdateDto } from '../dto/add.dto';
import { Add, AddDocument } from '../schemas/add.schema';

@Injectable()
export class AddService {
  constructor(
    @InjectModel(Add.name) private readonly addModel: Model<AddDocument>,
  ) {}

  async getAdds(@Query() queryParams): Promise<AddDto[]> {
    return this.addModel
      .find(queryParams)
      .limit(Number(queryParams?.limit) || 0)
      .exec();
  }

  async createAdd(@Body() add): Promise<AddDto> {
    return this.addModel.create(add);
  }

  async updateAdd(
    @Query() id: string,
    @Body() add: AddDto,
  ): Promise<AddUpdateDto> {
    return this.addModel.updateOne({ _id: id }, { $set: add }).exec();
  }

  async deleteAdd(@Query() id): Promise<AddDeleteDto> {
    return this.addModel.deleteOne({ _id: id }).exec();
  }
}
