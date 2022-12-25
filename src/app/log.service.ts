import { Injectable } from '@angular/core';
import { BelezkaService } from './services/belezka.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(private belezkaService: BelezkaService) { }
  avti = [{
    ime: "Porsche GT3 RS",
    displacement: 3996,
    weight: 1360,
    power: 500,
    isV8: false,
    status: "inactive"
  }, {
    ime: "Audi RS7",
    displacement: 3993,
    weight: 1995,
    power: 560,
    isV8: true,
    status: "inactive"
  }, {
    ime: "VW Scirocco R",
    displacement: 1984,
    weight: 1344,
    power: 265,
    isV8: false,
    status: "active"
  }, {
    ime: "Ford Mustang Shelby GT 500",
    displacement: 5407,
    weight: 1780,
    power: 557,
    isV8: true,
    status: "inactive"
  }]


  log(msg: string) {
    console.log(`%c${msg}`, "font-weight: bold; font-family: serif; color: black; background: peru;")
  }

  dodajNovAvto(ime: string, displacement: number, weight: number, power: number, isV8: boolean, status: string) {
    this.avti.push({
      ime: ime,
      displacement: displacement,
      weight: weight,
      power: power,
      isV8: isV8,
      status: status,
    })
    this.belezkaService.zabelezi(ime, status)
  }
}
