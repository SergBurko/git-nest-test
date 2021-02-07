import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '!! Hello Mel!! You Did it! You are loggend into DRUGA BRANCHA!';
  }
}
