import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BelezkaService } from 'src/app/services/belezka.service';
import { Motor } from 'src/app/types/motor';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent implements OnInit {
  motorji: Motor[] = []
  _filterText: string = '';
  filteredMotorji: Motor[] = []

  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value
  }

  constructor(private belezkaService: BelezkaService) { }

  ngOnInit(): void {
    this.motorji.push({ name: "361", displacement: 12900, configuration: "inline 6", valvesPerCylinder: 2 })
    this.motorji.push({ name: "480", displacement: 14600, configuration: "v8", valvesPerCylinder: 2 })
    this.motorji.push({ name: "281", displacement: 10100, configuration: "inline 6", valvesPerCylinder: 2 })
    this.motorji.push({ name: "313", displacement: 18200, configuration: "v10", valvesPerCylinder: 2 })
    this.motorji.push({ name: "620B", displacement: 1395, configuration: "inline 4", valvesPerCylinder: 2 })
    this.motorji.push({ name: "Iveco zeta 70-14", displacement: 5861, configuration: "inline 4", valvesPerCylinder: 2 })
    this.motorji.push({ name: "Zis 5", displacement: 5600, configuration: "inline 6", valvesPerCylinder: 2 })
    this.motorji.push({ name: "Zis 150", displacement: 5600, configuration: "inline 6", valvesPerCylinder: 2 })
    this.motorji.push({ name: "Zil 131", displacement: 6000, configuration: "v8", valvesPerCylinder: 2 })
    this.motorji.push({ name: "Seat 1.6", displacement: 1598, configuration: "inline 4", valvesPerCylinder: 2 })
    this.motorji.push({ name: "Rover", displacement: 1796, configuration: "inline 4", valvesPerCylinder: 4 })
    this.motorji.push({ name: "Opel 1.6", displacement: 1598, configuration: "inline 4", valvesPerCylinder: 4 })
    this.motorji.push({ name: "Seat 1.8T", displacement: 1781, configuration: "inline 4", valvesPerCylinder: 5 })
    this.motorji.push({ name: "Fiat JTD", displacement: 1910, configuration: "inline 4", valvesPerCylinder: 2 })

    this.filteredMotorji = this.motorji
  }
  onShowDetails(motor: {
    name: string,
    displacement: number,
    configuration: string
  }) {
    this.belezkaService.ShowUserDetails(motor)
  }

  onAddDummyMotor(): void {
    this.motorji.push({ name: "Officine Meccaniche", displacement: 4500, configuration: "inline 6", valvesPerCylinder: 2 })
  }

  filterMotorByValvesByCylinder(filterTerm: string) {
    if (this.motorji.length === 0 || filterTerm === '') {
      return this.motorji;
    } else {
      return this.motorji.filter((motor) => {
        return motor.valvesPerCylinder.toString() == filterTerm
      })
    }
  }
}
