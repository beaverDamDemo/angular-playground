import { Component, Inject, OnInit } from '@angular/core';
import { LoggerBlueService } from '../services/logger-blue.service';
import { LoggerDefaultService } from '../services/logger-default.service';
import { Sporocilco } from '../interfaces/sporocilco';
import { APIKEY_we_will_use_this_to_pass_value } from '../value';

@Component({
  selector: 'app-njel',
  templateUrl: './njel.component.html',
  styleUrls: ['./njel.component.scss'],
  providers: [{
    provide: LoggerBlueService,
    useClass: LoggerBlueService
  }
  ]
})
export class NjelComponent implements OnInit {
  tmp: Sporocilco = {
    msg: "I am njel",
    barva: ""
  }
  apikey: any

  constructor(private loggerDefault: LoggerDefaultService, @Inject(APIKEY_we_will_use_this_to_pass_value) a) {
    this.apikey = a
  }

  ngOnInit(): void {
    this.loggerDefault.log(this.tmp)
  }

}
