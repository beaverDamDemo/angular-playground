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
  responseImage: string = ""

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  onSpan(index: number) {
    this.clickedSpan = index
  }

  onGetSingleCar() {
    const el: HTMLElement | null = document.querySelector('#cardA')
    if (el) {
      el.classList.remove('active')
    }
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
        this.responseImage = "http://localhost:3000/" + val.carData[6][1].slice(3)
        setTimeout(() => {
          const el: HTMLElement | null = document.querySelector('#cardA')
          if (el) {
            el.classList.add('active')
          }
        }, 500)
      },
      error(msg) {
        console.log('Error: ', msg);
      }
    })

    this.getSingleCarImage().subscribe({
      next: (val: any) => {
        this.responseImage = val
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

  onCarPrevious() {
    this.clickedSpan = this.clickedSpan - 1
    this.onGetSingleCar()
  }
  onCarNext() {
    this.clickedSpan = this.clickedSpan + 1
    this.onGetSingleCar()
  }

  getSingleCar(): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:3000/cars/get-single-car/${this.clickedSpan}`, {}).pipe(
      // map(simulation => Simulation.deserialize(simulation)),
      // tap(res => console.log("res: ", res))
    );
  }

  getSingleCarImage(): Observable<unknown> {
    return this.httpClient.get(`http://127.0.0.1:3000/cars/get-single-car-image/${this.clickedSpan}`, {}).pipe(
    )
  }

  getAllCars(): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:3000/cars/get-all-cars`, {}).pipe(
      // map(simulation => Simulation.deserialize(simulation)),
      // tap(res => console.log("res: ", res))
    );
  }
}
