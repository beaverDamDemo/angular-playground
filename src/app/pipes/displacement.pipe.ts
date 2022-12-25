import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displacement'
})
export class DisplacementPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value > 4000) {
      return value + " ccm: " + Math.round((value * 100) / 10000) / 10 + " L";
    } else {
      return value + " ccm";
    }
  }
}
