import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerDefaultService {

  constructor() { }

  log(message: string) {
    console.log(`%c ${message} from logger default`, "background: white; color: black; font-weight: bold; font-family: serif")
  }
}
