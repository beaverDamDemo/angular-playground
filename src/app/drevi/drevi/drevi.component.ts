import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-drevi',
  templateUrl: './drevi.component.html',
  styleUrls: ['./drevi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DreviComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Brekuja',
      icon: 'person-outline',
      link: 'brekuja',
    },
    {
      title: 'Kacija',
      icon: 'lock-outline',
      link: 'kacija',
    },
    {
      title: 'Njel',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
      link: 'njel',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


