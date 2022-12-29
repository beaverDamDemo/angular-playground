import { Component, OnInit } from '@angular/core';
import { LoggerDefaultService } from '../services/logger-default.service';

@Component({
  selector: 'app-njel',
  templateUrl: './njel.component.html',
  styleUrls: ['./njel.component.scss']
})
export class NjelComponent implements OnInit {

  constructor(private loggerDefault: LoggerDefaultService) { }

  ngOnInit(): void {
    this.loggerDefault.log("Njel")
  }

}
