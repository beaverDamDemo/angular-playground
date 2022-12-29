import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalerrorhandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    console.log("%c there is no error here", "background: red; color: black; font-weight: bold; font-family: serif")
  }
}
