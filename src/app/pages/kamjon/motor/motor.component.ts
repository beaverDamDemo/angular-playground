import { Component, OnInit } from '@angular/core';
import { BelezkaService } from 'src/app/services/belezka.service';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent implements OnInit {
  motorji: {
    name: string,
    displacement: number,
    configuration: string
  }[] = []
  constructor(private belezkaService: BelezkaService) { }

  ngOnInit(): void {
    this.motorji.push({ name: "361", displacement: 12900, configuration: "inline 6" })
    this.motorji.push({ name: "480", displacement: 14600, configuration: "v8" })
    this.motorji.push({ name: "281", displacement: 10100, configuration: "inline 6" })
    this.motorji.push({ name: "313", displacement: 18200, configuration: "v10" })
    this.motorji.push({ name: "620B", displacement: 1395, configuration: "inline 4" })
    this.motorji.push({ name: "Iveco zeta 70-14", displacement: 5861, configuration: "inline 4" })
    this.motorji.push({ name: "Zis 5", displacement: 5600, configuration: "inline 6" })
    this.motorji.push({ name: "Zis 150", displacement: 5600, configuration: "inline 6" })
    this.motorji.push({ name: "Zil 131", displacement: 6000, configuration: "v8" })
  }
  onShowDetails(motor: {
    name: string,
    displacement: number,
    configuration: string
  }) {
    this.belezkaService.ShowUserDetails(motor)
  }
}
