import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appYellowize]',
  host: {
    '(click)': 'applyYellowize()'
  }
})
export class YellowizeDirective {
  el: ElementRef | undefined
  @Input() barva: string = ""

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.el = elementRef
  }

  applyYellowize() {
    console.log("⛳ ~ this.el", this.el)
    this.el.nativeElement.style.backgroundColor = this.barva
    this.renderer.setStyle(this.el.nativeElement, "border", "1px solid maroon")
  }
}
