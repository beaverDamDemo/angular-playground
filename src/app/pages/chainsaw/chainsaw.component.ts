import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chainsaw',
  template: `
    <div
      style="background-color: rgb(166, 207, 226); color: rgb(27, 29, 28); padding: 0.5rem;"
    >
      <p>chainsaw works!</p>
      <app-verige></app-verige>
      <app-grinders></app-grinders>
    </div>
  `,
  styles: [],
})
export class ChainsawComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
