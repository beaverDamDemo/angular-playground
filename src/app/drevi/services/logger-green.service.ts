import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerGreenService {

  constructor() { }

  log(message: string) {
    console.log(`%c ${message} from logger green`, "background: olivedrab; color: black; font-weight: bold; font-family: serif")
  }
}
