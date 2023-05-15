import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kv1',
  template: `
    <h4>I am kv 1</h4>
    <img src="assets/images/Screenshot from 2023-03-02 12-18-02.png" />
  `,
  styles: [],
})
export class Kv1Component implements OnInit {
  label: string = 'Kv1 heavy tank';
  constructor() {}

  ngOnInit(): void {}
}
