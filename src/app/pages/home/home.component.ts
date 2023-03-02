import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>home works!</p>
    <button nbButton status="warning">
      <a routerLink="/pages/chainsaw">chainsaw</a>
    </button>
    <button nbButton status="danger">
      <a routerLink="/pages/kamjon">kamjon</a>
    </button>
    <button nbButton status="primary">
      <a routerLink="/pages/letala">letala</a>
    </button>
    <button nbButton status="info">
      <a routerLink="/pages/tanki/heavy-tank">heavt-tank</a>
    </button>
  `,
  styles: [
    'a {text-decoration: none; color: white;} button { margin: 0.1rem;}',
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
