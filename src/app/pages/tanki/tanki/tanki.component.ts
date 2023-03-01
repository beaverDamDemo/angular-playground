import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tanki',
  templateUrl: './tanki.component.html',
  styleUrls: ['./tanki.component.scss'],
})
export class TankiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('tanki component initialized');
  }
}
