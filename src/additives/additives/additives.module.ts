import { Module } from '@nestjs/common';
import { AdditivesService } from './additives.service';
import { AdditivesController } from './additives.controller';

@Module({
  controllers: [AdditivesController],
  providers: [AdditivesService],
})
export class AdditivesModule {}
