import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kv1',
  templateUrl: './kv1.component.html',
  styleUrls: ['./kv1.component.scss'],
})
export class Kv1Component implements OnInit {
  label: string = 'Kv1 heavy tank';
  constructor() {}

  ngOnInit(): void {}
}
