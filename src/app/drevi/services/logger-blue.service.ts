import { Injectable } from '@angular/core';
import { Sporocilco } from '../interfaces/sporocilco';

@Injectable()
export class LoggerBlueService {

  constructor() { }

  log(podatki: Sporocilco) {
    console.log(`%c ${podatki.msg} from logger blue`, `background: dodgerblue; color: black; font-weight: bold; font-family: serif`)
  }
}
