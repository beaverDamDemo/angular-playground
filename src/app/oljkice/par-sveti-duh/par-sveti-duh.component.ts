import { Component, OnInit } from '@angular/core';
import { LogService } from '../oljkice/log.service';
import { OljkiceService } from '../oljkice/oljkice.service';

@Component({
  selector: 'app-par-sveti-duh',
  templateUrl: './par-sveti-duh.component.html',
  styleUrls: ['./par-sveti-duh.component.scss'],
  providers: [OljkiceService]
})
export class ParSvetiDuhComponent implements OnInit {
  message: string = ""

  constructor(private oljkiceService: OljkiceService, private logService: LogService) { }

  ngOnInit(): void {
    this.oljkiceService.dodajOljkico('na trikotniku 1', 'na trikotniku')
    this.message = this.logService.sayHello('Anka par sveti duh')
  }

}
