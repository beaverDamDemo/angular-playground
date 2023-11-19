import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-drevi',
  templateUrl: './drevi.component.html',
  styleUrls: ['./drevi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DreviComponent implements OnInit {
  items: any[] = [
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


