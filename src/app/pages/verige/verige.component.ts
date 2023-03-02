import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verige',
  template: `
    <p>verige works!</p>
    <!-- <nb-layout>
      <nb-layout-header></nb-layout-header>
      <nb-layout-footer></nb-layout-footer>
      <nb-layout-column></nb-layout-column>
      <nb-sidebar></nb-sidebar>
    </nb-layout> -->
    <button nbButton>button</button>
  `,
  styles: [],
})
export class VerigeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
