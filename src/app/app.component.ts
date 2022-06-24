import { Component, OnInit } from '@angular/core';
import { Airplane } from "./strpedova"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-piatnik';

  ngOnInit(): void {
    enum Color { Red, Green, Blue }
    let backgroundColor = Color.Green

    let message
    message = "abc"
    let endsWithC = (<string>message).endsWith("c")
    let endsWithD = (<string>message).charCodeAt(1000)
    let alnernate = (message as string).endsWith("a")

    // inline annotation
    let drawPoint = (point: { x: number, y: number }) => {
      return point.x + point.y
    }
    drawPoint({
      x: 1,
      y: 1000
    })

    class Car {
      // use private only when you need to
      constructor(public ccm?: number) {
        this.ccm = ccm
      }
      draw() {

      }
      getDistance(another: Car) {

      }
    }

    // let p: Car = new Car();
    let p = new Car(500)
    p.ccm = 350
    p.draw()

    // best solution:
    class Submarine {
      constructor(private _len: number, public _depth?: number) {
      }
      draw() {
        console.log("🚀 ~ file: app.component.ts ~ line 53 ~ Submarine ~ ngOnInit ~ len", this.len)
      }
      getLen() {
        return this._len
      }
      set depth(val: number) {
        if( val < 10000) {
          // throw new Error("Value caNNOt be that hight")
        }
        this._depth = val
      }
      set len(val: any) {
        if( val < 10) {

        }
        this._len = val
      }
    }

    let s = new Submarine(100)
    s.draw()
    s.depth = 166
    // s.getLen()

    let spitfire = new Airplane(650, 1)
    spitfire.engineCount = 2

  }


}
