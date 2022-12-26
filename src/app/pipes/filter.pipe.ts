import { Pipe, PipeTransform } from '@angular/core';
import { Motor } from '../types/motor';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(engines: Motor[], filterText: string): Motor[] {
    console.log("pipe called")
    if (engines.length === 0 || filterText === '') {
      return engines;
    } else {

      return engines.filter((current) => {
        return current.configuration.toLowerCase() == filterText.toLowerCase()
      })
    }
  }

}
