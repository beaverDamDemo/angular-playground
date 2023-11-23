import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
interface nekaj {
  title: string;
  link: string;
  color: string;
  icon: Object;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: nekaj[] = [
    {
      title: 'Draggable',
      link: 'pages/draggable',
      color: 'primary',
      icon: 'lock-outline',
    },
    {
      title: 'Single Car Display',
      link: 'pages/single-car-display',
      color: 'accent',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Upload New Car',
      link: 'pages',
      color: 'warn',
      icon: { icon: 'plus-circle-outline', pack: 'eva' },
    },
    {
      title: 'Cars from API',
      link: 'pages/cars-from-api',
      color: 'primary',
      icon: { icon: 'cast-outline', pack: 'eva' },
    },
    {
      title: 'About',
      link: 'pages/about',
      color: 'basic',
      icon: { icon: 'pantone-outline', pack: 'eva' },
    },
    {
      title: 'Zemljevid',
      link: 'pages/zemljevid',
      color: 'primary',
      icon: { icon: 'home-outline', pack: 'eva' },
    },
    {
      title: 'Kamjon',
      link: 'pages/kamjon',
      color: 'primary',
      icon: { icon: 'car-outline', pack: 'eva' },
    },
    {
      title: 'Whores',
      link: 'pages/whores',
      color: 'primary',
      icon: { icon: 'phone-call', pack: 'eva' },
    },
    {
      title: 'drevi',
      link: 'drevi',
      color: 'primary',
      icon: { icon: 'thermometer-minus', pack: 'eva' },
    },
    {
      title: 'avti',
      link: 'avti-iz-oglasov',
      color: 'primary',
      icon: { icon: 'thermometer-plus', pack: 'eva' },
    },
    {
      title: 'oljkice',
      link: 'oljkice',
      color: 'primary',
      icon: { icon: 'sun', pack: 'eva' },
    },
    {
      title: 'cesen',
      link: 'cesen',
      color: 'primary',
      icon: { icon: 'sun', pack: 'eva' },
    },
  ];
  single_item = this.items[2];
  constructor() {}

  ngOnInit(): void {}
}
