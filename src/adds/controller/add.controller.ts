import { Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { AddService } from '../services/add.service';
import { Request } from 'express';
import { AddDeleteDto, AddDto, AddUpdateDto } from '../dto/add.dto';

@Controller('add')
export class AddController {
  constructor(private addService: AddService) {}

  @Get()
  async getAdd(@Req() request: Request): Promise<AddDto[]> {
    return this.addService.getAdds(request.query);
  }

  @Post()
  async createAdd(@Req() request: Request): Promise<AddDto> {
    return this.addService.createAdd(request.body);
  }

  @Post(':id')
  async updateAdd(@Req() request: Request): Promise<AddUpdateDto> {
    return this.addService.updateAdd(request.params?.id, request.body);
  }

  @Delete(':id')
  async deleteAdd(@Req() request: Request): Promise<AddDeleteDto> {
    return this.addService.deleteAdd(request.params?.id);
  }
}
