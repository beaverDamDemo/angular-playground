import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myassistant',
  templateUrl: './myassistant.component.html',
  styleUrls: ['./myassistant.component.scss']
})
export class MyassistantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ponyPrices = [12, 43, 4]
    const minPrice = Math.min(...ponyPrices)
    console.log("⛳ ~ minPrice", minPrice)

    const tanja = new Tanja(52)
    console.log(tanja.toString())
    console.log(Tanja.defaultWeight())
    console.log(tanja.getWeight())
    const rebeka = new Rebeka(14, 55)
    console.log(rebeka.toString())

    const mig3 = {
      id: 1,
      role: 'interceptor'
    }
    const il2 = {
      id: 2,
      role: 'ground attack'
    }
    const letalcka:any = new Map()
    letalcka.set(mig3.id, mig3.role)
    letalcka.set(il2.id, il2.role)

    const settek:any = new Set()
    settek.add(il2)
    settek.add(mig3)

    for(let l of letalcka) {
      console.log(l.role)
    }

    for(let l of settek) {
      console.log(l.role)
    }

    const cedric = { id: 1, name: 'Cedric' };
    const users:any = new Set();
    users.add(cedric); // adds a user
    for (let user of users) {
      console.log(user.name);
    }








  }
}

class Tanja {
  private weight: number | string;
  constructor(weight) {
    this.weight = weight
  }

  toString() {
    return `Tanja is ${this.weight} kg heavy`
  }

  static defaultWeight() {
    return 54
  }

  getWeight() {
    return this.weight;
  }
}

class Rebeka extends Tanja {
  private age: number | string

  constructor(age, weight) {
    super(weight)
    this.age = age
  }
  override toString(): string {
      return `Rebeka is ${super.getWeight()} kg heavy and she is ${this.age}`
  }
}

interface Nusa {
  weight: number
  height: number
  boobSize: number | string
}
const nusa: Nusa = {
  weight: 55, height: 166, boobSize: 2
}

interface CanRun {
  run(meters: number): void;
}

function startRunning(pony: CanRun): void {
  pony.run(10)
}
