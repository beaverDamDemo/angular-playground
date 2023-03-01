import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lidl',
  template: `
    <p>lidl works!</p>
    <app-tisti-drag></app-tisti-drag>
  `,
  styles: [],
})
export class LidlComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
