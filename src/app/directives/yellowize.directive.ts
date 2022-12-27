import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appYellowize]',
  host: {
    '(click)': 'applyYellowize()',
    '(mouseenter)': 'applyHover()',
    '(mouseleave)': 'applyMouseLeave()'
  }
})
export class YellowizeDirective {
  el: ElementRef | undefined
  @Input() barva: string = ""

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.el = elementRef
  }

  applyYellowize() {
    this.el.nativeElement.style.backgroundColor = this.barva
    this.renderer.addClass(this.el.nativeElement, "yellowized")
    this.renderer.setStyle(this.el.nativeElement, "border", "1px solid maroon")
  }
  applyHover(): void {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 3px 2px dodgerblue')
  }
  applyMouseLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none')
  }
}
