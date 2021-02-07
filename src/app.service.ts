import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  a: number = 6
  b: number = 10

  getHello(): string {

    return '!!Hello Mel!!return !!Hello Mel!! CLEAR SOME DATA' + (this.a + this.b);
  }

}