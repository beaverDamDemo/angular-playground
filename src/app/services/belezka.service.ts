import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BelezkaService {

  constructor() { }

  zabelezi(name: string, status: string) {
    console.log(`%c${name} ${status} has beewn added`, "font-weight: bold; font-family: serif; color: black; background: maroon;")
  }

  onShowDetailsClicked = new EventEmitter<{
    name: string,
    displacement: number,
    configuration: string
  }>();

  ShowUserDetails(motor: {
    name: string,
    displacement: number,
    configuration: string
  }) {
    this.onShowDetailsClicked.emit(motor)
  }
}
