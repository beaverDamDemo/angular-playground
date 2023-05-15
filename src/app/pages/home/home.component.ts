import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>home works!</p>
    <a routerLink="/pages/chainsaw">
      <button nbButton status="warning">chainsaw</button></a
    >
    <a routerLink="/pages/kamjon">
      <button nbButton status="danger">kamjon</button></a
    >
    <a routerLink="/pages/letala">
      <button nbButton status="primary">letala</button></a
    >
    <a routerLink="/pages/tanki/heavy-tank"
      ><button nbButton status="info">heavt-tank</button></a
    >
  `,
  styles: [
    'a {text-decoration: none; color: white;} button { margin: 0.1rem;}',
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
