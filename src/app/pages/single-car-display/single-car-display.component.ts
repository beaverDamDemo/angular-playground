import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-single-car-display',
  templateUrl: './single-car-display.component.html',
  styleUrls: ['./single-car-display.component.scss']
})
export class SingleCarDisplayComponent implements OnInit {
  clickedSpan: number = 0
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  onSpan(index: number) {
    this.clickedSpan = index
  }

  onGetSingleCar() {
    this.getSingleCar().subscribe({
      next: (val: any) => {
        console.log("🚀 ~ file: single-car-display.component.ts ~ line 18 ~ SingleCarDisplayComponent ~ this.getSingleCar ~ val", val)
      },
      error(msg) {
        console.log('Error: ', msg);
      }
    })
  }

  onGetAllCars() {
    this.getAllCars().subscribe({
      next: (value: any) => {
        console.log("value: ", value)
      },
      error(msg) {
        console.log('Error: ', msg);
      }
    })
  }

  getSingleCar(): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:3000/cars/get-single-car/${this.clickedSpan}`, {}).pipe(
      // map(simulation => Simulation.deserialize(simulation)),
      tap(res => console.log("res: ", res))
    );
  }

  getAllCars(): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:3000/cars/get-all-cars`, {}).pipe(
      // map(simulation => Simulation.deserialize(simulation)),
      tap(res => console.log("res: ", res))
    );
  }
}
