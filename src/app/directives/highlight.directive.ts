import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, "text-decoration", "underline")
    this.renderer.setStyle(this.element.nativeElement, "font-weight", "bold")
    this.renderer.setStyle(this.element.nativeElement, "font-family", "serif")
    this.renderer.addClass(this.element.nativeElement, "myClass")
    this.renderer.setAttribute(this.element.nativeElement, "title", "I am th etitle")
  }
}
