import { Injectable } from '@angular/core';

@Injectable()
export class UpdatedLogService {

  private static count = 0;

  constructor() {
    UpdatedLogService.count += 1;
    console.log("UpdatedLogService.count: ", UpdatedLogService.count)
  }

  sayHello(msg: string) {
    console.log(`Hello updated ${msg}, count is: ${UpdatedLogService.count}`)
    return `Hello update ${msg}, count is: ${UpdatedLogService.count}`
  }

  sayNotHello() {
    return "Hello not hello"
  }
}
