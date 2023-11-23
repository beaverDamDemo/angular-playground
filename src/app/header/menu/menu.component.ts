import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
interface nekaj {
  title: string
  link: string
  icon: Object
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: nekaj[] = [
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
    {
      title: 'Upload New Car',
      link: 'pages',
      icon: { icon: 'plus-circle-outline', pack: 'eva' },
    },
    {
      title: 'Cars from API',
      link: 'pages/cars-from-api',
      icon: { icon: 'cast-outline', pack: 'eva' },
    },
    {
      title: 'About',
      link: 'pages/about',
      icon: { icon: 'pantone-outline', pack: 'eva' },
    },
    {
      title: 'Zemljevid',
      link: 'pages/zemljevid',
      icon: { icon: 'home-outline', pack: 'eva' },
    },
    {
      title: 'Kamjon',
      link: 'pages/kamjon',
      icon: { icon: 'car-outline', pack: 'eva' },
    },
    {
      title: 'Whores',
      link: 'pages/whores',
      icon: { icon: 'phone-call', pack: 'eva' },
    },
    {
      title: 'drevi',
      link: 'drevi',
      icon: { icon: 'thermometer-minus', pack: 'eva' },
    },
    {
      title: 'avti',
      link: 'avti-iz-oglasov',
      icon: { icon: 'thermometer-plus', pack: 'eva' },
    },
    {
      title: 'oljkice',
      link: 'oljkice',
      icon: { icon: 'sun', pack: 'eva' },
    },
  ];
  single_item = this.items[2];
  constructor() { }

  ngOnInit(): void {
  }

}

