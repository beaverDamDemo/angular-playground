import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerBlueService {

  constructor() { }

  log(message: string) {
    console.log(`%c ${message} from logger blue`, "background: dodgerblue; color: black; font-weight: bold; font-family: serif")
  }
}
