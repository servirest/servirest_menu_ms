import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AdditivesService } from './additives.service';
import { CreateAdditiveDto } from './dto/create-additive.dto';
import { UpdateAdditiveDto } from './dto/update-additive.dto';

@Controller()
export class AdditivesController {
  constructor(private readonly additivesService: AdditivesService) {}

  @MessagePattern('createAdditive')
  create(@Payload() createAdditiveDto: CreateAdditiveDto) {
    return this.additivesService.create(createAdditiveDto);
  }

  @MessagePattern('findAllAdditives')
  findAll() {
    return this.additivesService.findAll();
  }

  @MessagePattern('findOneAdditive')
  findOne(@Payload() id: number) {
    return this.additivesService.findOne(id);
  }

  @MessagePattern('updateAdditive')
  update(@Payload() updateAdditiveDto: UpdateAdditiveDto) {
    return this.additivesService.update(updateAdditiveDto.id, updateAdditiveDto);
  }

  @MessagePattern('removeAdditive')
  remove(@Payload() id: number) {
    return this.additivesService.remove(id);
  }
}
