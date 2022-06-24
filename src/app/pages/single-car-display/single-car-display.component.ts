import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Car } from "../../strpedova"

@Component({
  selector: 'app-single-car-display',
  templateUrl: './single-car-display.component.html',
  styleUrls: ['./single-car-display.component.scss']
})
export class SingleCarDisplayComponent implements OnInit {
  clickedSpan: number = 0
  responseCar: any = undefined

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  onSpan(index: number) {
    this.clickedSpan = index
  }

  onGetSingleCar() {
    this.getSingleCar().subscribe({
      next: (val: any) => {
        this.responseCar = new Car(
          val.carData[0][1],
          val.carData[1][1],
          val.carData[2][1],
          val.carData[3][1],
          val.carData[4][1],
          val.carData[5][1],
          val.carData[6][1],
          val.carData[7][1],
          val.carData[8][1],
        )
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