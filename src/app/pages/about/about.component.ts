import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  tanjina: string = "tanjina";
  kabelcek: string = "";
  chainsaws: Object[] = [
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

  constructor() { }

  ngOnInit(): void {
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
}
