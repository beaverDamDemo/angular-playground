import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OljkiceService {
  oljkice: {
    ime: string,
    lokacija: string
  }[] = []

  constructor() { }

  vrniVseOljkice() {
    return [{
      ime: 'pod marinom prva vrsta 1',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom prva vrsta 2',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom prva vrsta 3',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom prva vrsta 4',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom prva vrsta 5',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom prva vrsta 6',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom prva vrsta 7',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom druga vrsta 1',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom druga vrsta 2',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom druga vrsta 3',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom druga vrsta 4',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom druga vrsta 5',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom druga vrsta 6',
      lokacija: 'doma'
    }, {
      ime: 'pod marinom druga vrsta 7',
      lokacija: 'doma'
    },]
  }

  dodajOljkico(ime: string, lokacija: string): void {
    this.oljkice.push({
      ime: ime,
      lokacija: lokacija
    })
  }
}
