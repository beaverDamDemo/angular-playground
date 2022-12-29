import { Component, OnInit } from '@angular/core';
import { LoggerBlueService } from '../services/logger-blue.service';
import { LoggerDefaultService } from '../services/logger-default.service';
import { LoggerGreenService } from '../services/logger-green.service';

@Component({
  selector: 'app-kacija',
  templateUrl: './kacija.component.html',
  styleUrls: ['./kacija.component.scss'],
  providers: [
    LoggerDefaultService,
    LoggerBlueService,
    LoggerGreenService
  ]
})
export class KacijaComponent implements OnInit {

  constructor(private loggerDefault: LoggerDefaultService) { }

  ngOnInit(): void {
  }

}
