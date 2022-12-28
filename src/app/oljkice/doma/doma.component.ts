import { Component, OnInit } from '@angular/core';
import { OljkiceService } from '../oljkice/oljkice.service';

@Component({
  selector: 'app-doma',
  templateUrl: './doma.component.html',
  styleUrls: ['./doma.component.scss'],
  providers: [OljkiceService]
})
export class DomaComponent implements OnInit {
  oljkice: Object[] = []

  constructor(private oljkiceService: OljkiceService) { }

  ngOnInit(): void {
    this.oljkiceService.dodajOljkico("par kapinere", "doma")
    this.oljkiceService.vrniVseOljkice()
    this.oljkice = this.oljkiceService.vrniVseOljkice()
  }

}
