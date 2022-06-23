import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import Draggable from "gsap/Draggable";

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class DraggableComponent implements OnInit {
  public draggable: any = undefined;

  constructor() {

  }

  ngOnInit(): void {
    gsap.registerPlugin(Draggable);
  }
  ngAfterViewInit(): void {
    let startX: number, startY: number
    this.draggable = Draggable.create("#item_2", {
      type: "x,y",
      onDragStart: () => {

      },
      onRelease: () => {
        // console.log("🚀 ~ file: draggable.component.ts ~ line 26 ~ DraggableComponent ~ ngAfterViewInit ~ tanja", tanja)

        if (this.hitTest('#item_2', ".dropArea .item__triangle") == true) {
          // put in place
          gsap.to("#item_2", {
            duration: 0.5, x: 0, y: 100, onComplete: function () {
              const itemEl = document.querySelectorAll('#item_2').item(0)
              itemEl.classList.add("complete")
            }
          });
        } else {
          gsap.to("#item_2", {
            duration: 0.5, x: 0, y: 0, ease: "elastic(1, 0.5)",
          });
        }
      },
    });
  }
  public hitTest(item: any, dropArea: any) {
    const itemEl = document.querySelectorAll(item).item(0)
    // console.log("🚀 ~ file: draggable.component.ts ~ line 40 ~ DraggableComponent ~ hitTest ~ itemEl", itemEl.getBoundingClientRect().left)

    const dropAreaEl = document.querySelectorAll(dropArea).item(0)
    // console.log("🚀 ~ file: draggable.component.ts ~ line 43 ~ DraggableComponent ~ hitTest ~ dropAreaEl", dropAreaEl.getBoundingClientRect().left)

    if (Math.pow(itemEl.getBoundingClientRect().left - dropAreaEl.getBoundingClientRect().left, 2) < 300) {
      if (Math.pow(itemEl.getBoundingClientRect().top - dropAreaEl.getBoundingClientRect().top, 2) < 300) {
        return true
      }
    }

    return false
  }
}
