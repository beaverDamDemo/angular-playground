import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  private static count = 0;

  constructor() {
    LogService.count += 1;
    console.log("LogService.count: ", LogService.count)
  }

  sayHello(msg: string) {
    console.log(`Hello ${msg}, count is: ${LogService.count}`)
    return `Hello ${msg}, count is: ${LogService.count}`
  }


}
