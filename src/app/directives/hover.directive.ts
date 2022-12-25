import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') myMouseHover() {
    this.renderer.setStyle(this.element.nativeElement, "margin", "30px")
    this.renderer.setStyle(this.element.nativeElement, "padding", "10px")
    this.renderer.setStyle(this.element.nativeElement, "background", "dodgerblue")
    this.renderer.setStyle(this.element.nativeElement, "transition", "all 1s ease-in-out")
  }

  @HostListener('mouseleave') myMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, "margin", "0px")
    this.renderer.setStyle(this.element.nativeElement, "padding", "0px")
    this.renderer.setStyle(this.element.nativeElement, "background", "transparent")
    this.renderer.setStyle(this.element.nativeElement, "transition", "all 1s ease-in-out")
  }
}
