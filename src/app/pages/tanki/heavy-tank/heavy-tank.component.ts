import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-tank',
  template: ` <div [innerText]="labelcek"></div> `,
  styles: [],
})
export class HeavyTankComponent implements OnInit {
  labelcek: string = 'I am heavy tank';
  constructor() {}

  ngOnInit(): void {}
}
