import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Controller()
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @MessagePattern('createDish')
  create(@Payload() createDishDto: CreateDishDto) {
    return this.dishesService.create(createDishDto);
  }

  @MessagePattern('findAllDishes')
  findAll() {
    return this.dishesService.findAll();
  }

  @MessagePattern('findOneDish')
  findOne(@Payload() id: number) {
    return this.dishesService.findOne(id);
  }

  @MessagePattern('updateDish')
  update(@Payload() updateDishDto: UpdateDishDto) {
    return this.dishesService.update(updateDishDto.id, updateDishDto);
  }

  @MessagePattern('removeDish')
  remove(@Payload() id: number) {
    return this.dishesService.remove(id);
  }
}
