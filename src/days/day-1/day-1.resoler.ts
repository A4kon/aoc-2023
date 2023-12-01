import { Mutation, Resolver } from '@nestjs/graphql';
import { Day1Service } from './day-1.service';

@Resolver()
export class Day1Resolver {
  constructor(private readonly day1Service: Day1Service) {}
  @Mutation(() => Number)
  async solveSilverTaskForDay1(): Promise<number> {
    return await this.day1Service.solveSilverTaskForDay1();
  }
  @Mutation(() => Number)
  async solveGoldTaskForDay1(): Promise<number> {
    return await this.day1Service.solveGoldTaskForDay1();
  }
}
