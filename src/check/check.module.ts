import { Module } from '@nestjs/common';
import { CheckResolver } from './check.resolver';

@Module({
  imports: [],
  providers: [CheckResolver],
})
export class CheckModule {}
