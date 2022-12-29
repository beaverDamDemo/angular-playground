import { Injectable } from '@angular/core';
import { Sporocilco } from '../interfaces/sporocilco';

@Injectable()
export class LoggerDefaultService {
  private static count = 0
  constructor() {
    LoggerDefaultService.count += 1
    console.log("LoggerDefaultService.count: ", LoggerDefaultService.count)
  }

  log(podatki: Sporocilco) {
    console.log(`%c ${podatki.msg} from logger default`, `background: wheat; color: black; font-weight: bold; font-family: serif`)
  }
}
