import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [LogService]
})
export class AboutComponent implements OnInit {
  tanjina: string = "tanjina";
  kabelcek: string = "";
  chainsaws: any[] = [
    {
      brand: "Husqvarna",
      model: "120",
      barLength: "35",
      displacement: "33",
    }, {
      brand: "Alpina",
      model: "Prof 45",
      barLength: "40",
      displacement: "45",
    }, {
      brand: "China",
      model: "5200S",
      barLength: "45",
      displacement: "52",
    }, {
      brand: "Stihl",
      model: "170",
      barLength: "35",
      displacement: "29",
    }
  ]
  izbranaMotorka = undefined;
  najvecjaMotorka = this.izberiNajvecjoMotorko()
  avti: {
    ime: string,
    displacement: number,
    weight: number,
    power: number,
    isV8: boolean,
    status: string
  }[] = []

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logService.log("I am hear")
    this.avti = this.logService.avti
    console.log("⛳ ~ this.avti", this.avti)
  }
  onInput(eventData: Event) {
    console.log(" e : ", ((<HTMLInputElement>eventData.target).value))
  }
  onKabelcek(e) {
    console.log(" e : ", e.target.value)
  }
  getBigChainsaws() {
    // return this.chainsaws.filter(c => c['displacement'] > 40)
    return this.chainsaws
  }
  onMinDisplacement(eventData: Event) {
    console.log(" e : ", ((<HTMLInputElement>eventData.target).value))
    this.chainsaws = this.chainsaws.filter(c => c['displacement'] > parseFloat((<HTMLInputElement>eventData.target).value))
  }
  sayHello(inputEl: HTMLInputElement) {
    console.log(inputEl)
  }
  izberiNajvecjoMotorko() {
    let motorkeCopy = [...this.chainsaws]
    return motorkeCopy.sort((current, next) => next.displacement - current.displacement)[0]
  }
}
