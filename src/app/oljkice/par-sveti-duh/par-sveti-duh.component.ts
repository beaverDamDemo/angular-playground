import { Component, OnInit } from '@angular/core';
import { OljkiceService } from '../oljkice/oljkice.service';

@Component({
  selector: 'app-par-sveti-duh',
  templateUrl: './par-sveti-duh.component.html',
  styleUrls: ['./par-sveti-duh.component.scss']
})
export class ParSvetiDuhComponent implements OnInit {

  constructor(private oljkiceService: OljkiceService) { }

  ngOnInit(): void {
    this.oljkiceService.dodajOljkico('na trikotniku 1', 'na trikotniku')
  }

}
