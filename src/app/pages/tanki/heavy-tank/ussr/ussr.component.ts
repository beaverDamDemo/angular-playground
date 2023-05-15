import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Kv1Component } from './kv1/kv1.component';

@Component({
  selector: 'app-ussr',
  templateUrl: './ussr.component.html',
  styleUrls: ['./ussr.component.scss'],
})
export class UssrComponent implements OnInit, AfterViewInit {
  constructor() {}
  @ViewChild(Kv1Component) kv1_podatki: string;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    if (this.kv1_podatki) {
      console.log('⚛ ~ kv1_podatki:', this.kv1_podatki['label']);
    }
  }
}
