import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CheckResolver {
  @Query(() => Boolean)
  async checkConnection(): Promise<boolean> {
    return true;
  }
}
