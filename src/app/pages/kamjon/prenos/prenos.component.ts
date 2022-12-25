import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BelezkaService } from 'src/app/services/belezka.service';

@Component({
  selector: 'app-prenos',
  templateUrl: './prenos.component.html',
  styleUrls: ['./prenos.component.scss']
})
export class PrenosComponent implements OnInit {
  prenosi: {
    name: string,
    gears: number,
    configuration: string
  }[] = [{
    name: "allison",
    gears: 12,
    configuration: "dual clutch"
  },
  {
    name: "fuller",
    gears: 14,
    configuration: "manual unsynchronized"
  }]

  myControl = new FormControl('default value', { updateOn: 'blur', initialValueIsDefault: false, })
  
  constructor(private belezkaService: BelezkaService) { }

  ngOnInit(): void {
    this.belezkaService.onShowDetailsClicked.subscribe((res) => {
      console.log("⛳ ~ res", res)
    })
  }
}
