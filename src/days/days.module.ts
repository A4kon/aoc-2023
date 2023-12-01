import { Module } from '@nestjs/common';
import modules from './common/modules';

@Module({
  imports: [...modules],
})
export class DaysModule {}
