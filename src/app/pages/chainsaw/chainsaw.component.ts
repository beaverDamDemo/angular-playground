import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chainsaw',
  template: `
    <p>chainsaw works!</p>
    <div>
      <app-verige></app-verige>
    </div>
  `,
  styles: [],
})
export class ChainsawComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
