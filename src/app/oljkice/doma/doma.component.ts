import { Component, OnInit } from '@angular/core';
import { LogService } from '../oljkice/log.service';
import { OljkiceService } from '../oljkice/oljkice.service';

@Component({
  selector: 'app-doma',
  templateUrl: './doma.component.html',
  styleUrls: ['./doma.component.scss'],
  providers: [OljkiceService, LogService]
})
export class DomaComponent implements OnInit {
  oljkice: Object[] = []
  message: string = ""

  constructor(private oljkiceService: OljkiceService, private logService: LogService) { }

  ngOnInit(): void {
    this.oljkiceService.dodajOljkico("par kapinere", "doma")
    this.oljkiceService.vrniVseOljkice()
    this.oljkice = this.oljkiceService.vrniVseOljkice()
    this.message = this.logService.sayHello('Tanja')
  }

}
