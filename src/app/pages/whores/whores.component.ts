import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Whore } from 'src/app/types/whore';

@Component({
  selector: 'app-whores',
  templateUrl: './whores.component.html',
  styleUrls: ['./whores.component.scss']
})
export class WhoresComponent implements OnInit {
  whores: Whore[] = []
  selectedWhore: Whore = undefined
  defaultBoobSize = "2"
  name: string = ""
  age: number = 40
  height: number = 166
  weight: number = 48
  haircuts: Object[] = [
    {
      id: 0,
      value: "Depilirana"
    },
    {
      id: 1,
      value: "Urejena"
    },
  ]
  selectedHaircut: any = "Depilirana"

  @ViewChild('newWhoreForm') newWhoreForm: NgForm
  constructor() { }

  ngOnInit(): void {
    this.whores.push(
      {
        name: "Petra1",
        age: 44,
        height: 168,
        weight: 55,
        boobSize: 3,
        haircut: "Depilirana"
      },
      {
        name: "Tea2",
        age: 42,
        height: 170,
        weight: 65,
        boobSize: 4,
        haircut: "Depilirana"
      },
      {
        name: "Goldenfish",
        age: 37,
        height: 162,
        weight: 52,
        boobSize: 3,
        haircut: "Depilirana"
      },
      {
        name: "Mia",
        age: 42,
        height: 160,
        weight: 57,
        boobSize: 3,
        haircut: "Depilirana"
      },
      {
        name: "Vanja",
        age: 25,
        height: 170,
        weight: 60,
        boobSize: 3,
        haircut: "Depilirana"
      },
      {
        name: "Eva 7",
        age: 33,
        height: 170,
        weight: 62,
        boobSize: 3,
        haircut: "Urejena"
      },
      {
        name: "Vesna",
        age: 27,
        height: 168,
        weight: 53,
        boobSize: 3,
        haircut: "Depilirana"
      },
    )
  }

  onSubmit() {
    console.log(this.selectedHaircut)
    this.whores.push({
      name: this.newWhoreForm.controls['Name'].value,
      age: this.newWhoreForm.controls['Age'].value,
      height: this.newWhoreForm.controls['heightAndWeight']['controls']['Height'].value,
      weight: this.newWhoreForm.controls['heightAndWeight']['controls']['Weight'].value,
      boobSize: this.newWhoreForm.controls['Boob_size'].value,
      haircut: this.selectedHaircut
    })
    this.newWhoreForm.reset()
  }

  onBookHer(w: Whore) {
    this.selectedWhore = w
  }
}
