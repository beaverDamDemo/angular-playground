import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letala',
  template: `
    <p>letala works!</p>
    <div>The router selects a route with a first-match-wins strategy.</div>
    <a routerLink="/pages/letala/fighter">
      <button nbButton status="danger">fighter</button></a
    >
    <a routerLink="/pages/letala/fighter">
      <button nbButton status="primary">fighter</button></a
    >
    <a routerLink="/pages/letala/fighter">
      <button nbButton status="info">fighter</button></a
    >
    <a routerLink="/pages/letala/fighter">
      <button nbButton status="warning">fighter</button></a
    >
  `,
  styles: [
    'a { color: black; text-decoration: none;} button { margin: 1px; color: black}',
  ],
})
export class LetalaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
