import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-dodaj-avto',
  templateUrl: './dodaj-avto.component.html',
  styleUrls: ['./dodaj-avto.component.scss'],
})
export class DodajAvtoComponent implements OnInit {
  ime
  displacement
  weight
  power
  isV8
  status
  constructor(private logService: LogService) { }

  ngOnInit(): void {
  }
  onDodajAvto() {
    this.logService.dodajNovAvto(
      this.ime,
      this.displacement,
      this.weight,
      this.power,
      this.isV8,
      this.status,
    )
  }
}
