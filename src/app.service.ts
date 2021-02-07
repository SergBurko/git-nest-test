import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  a: number = 6
  b: number = 10

  getHello(): string {

    return '18.50:  ' + (this.a + this.b)*2;
  }

}