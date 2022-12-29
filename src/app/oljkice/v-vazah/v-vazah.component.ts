import { Component, OnInit } from '@angular/core';
import { LogService } from '../oljkice/log.service';
import { OljkiceService } from '../oljkice/oljkice.service';
import { UpdatedLogService } from '../oljkice/updated-log.service';

@Component({
  selector: 'app-v-vazah',
  templateUrl: './v-vazah.component.html',
  styleUrls: ['./v-vazah.component.scss']
})
export class VVazahComponent implements OnInit {

  message: string = ""

  constructor(private oljkiceService: OljkiceService, private logService: UpdatedLogService) { }

  ngOnInit(): void {
    this.message = this.logService.sayHello('Kaj pa v vazah')
  }

}
