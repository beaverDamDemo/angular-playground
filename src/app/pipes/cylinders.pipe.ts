import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cylinders'
})
export class CylindersPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const thenum = value.match(/\d+/)[0]
    if(thenum == "1") {
      return value + " cylinder";
    } else {
      return value + " cylinders";
    }
  }
}
