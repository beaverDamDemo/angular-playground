import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-from-api',
  templateUrl: './cars-from-api.component.html',
  styleUrls: ['./cars-from-api.component.scss']
})
export class CarsFromApiComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  oneCar: any = {}

  ngOnInit(): void {
    this.showConfig()
  }
  getConfig() {
    return this.httpClient.get("http://localhost:3000/cars/get-single-car/5");
  }
  showConfig() {
    this.getConfig()
      .subscribe((res) => {
        console.log("⛳ ~ res", res)
        this.oneCar = res
      })
  }
}
