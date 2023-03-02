import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
    <img src="/assets/images/Screenshot from 2023-03-02 12-24-37.png" />
    <button fullWidth status="success" nbButton (click)="goHome()">
      Navigate Home
    </button>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goHome(): void {
    this.router.navigate(['/']);
  }
}
