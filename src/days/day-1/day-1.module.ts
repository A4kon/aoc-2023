import { Module } from '@nestjs/common';
import { Day1Resolver } from './day-1.resoler';
import { Day1Service } from './day-1.service';

@Module({
  providers: [Day1Resolver, Day1Service],
})
export class Day1Module {}
