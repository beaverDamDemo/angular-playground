import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/',
      icon: 'person-outline',
    },
    {
      title: 'Draggable',
      link: 'pages/draggable',
      icon: 'lock-outline',
    },
    {
      title: 'Single Car Display',
      link: 'pages/single-car-display',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

