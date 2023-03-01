import { isNgTemplate } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss'],
})
export class DraggableComponent implements OnInit, AfterViewInit {
  public draggable: any = undefined;

  constructor() {}
  ngAfterViewInit(): void {
    const items = ['#item_0', '#item_1', '#item_2'];
    for (let i = 0; i < items.length; i++) {
      this.draggable = Draggable.create(items[i], {
        type: 'x,y',
        onRelease: () => {
          if (this.hitTest(items[i], '.dropArea .item__triangle') == true) {
            // put in place
            gsap.to(items[i], {
              duration: 0.5,
              x: 0,
              y: 100,
              onComplete: function () {
                const itemEl = document.querySelectorAll(items[i]).item(0);
                itemEl.classList.add('complete');
              },
            });
          } else {
            gsap.to(items[i], {
              duration: 0.5,
              x: 0,
              y: 0,
              ease: 'elastic(1, 0.5)',
            });
          }
        },
      });
    }
  }
  public hitTest(item: any, dropArea: any) {
    const itemEl = document.querySelectorAll(item).item(0);
    const dropAreaEl = document.querySelectorAll(dropArea).item(0);

    if (
      Math.pow(
        itemEl.getBoundingClientRect().left -
          dropAreaEl.getBoundingClientRect().left,
        2
      ) < 300
    ) {
      if (
        Math.pow(
          itemEl.getBoundingClientRect().top -
            dropAreaEl.getBoundingClientRect().top,
          2
        ) < 300
      ) {
        return true;
      }
    }

    return false;
  }
  ngOnInit(): void {
    gsap.registerPlugin(Draggable);
  }
}
