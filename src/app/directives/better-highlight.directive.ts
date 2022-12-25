import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() defaultOzadje: string = "chocolate"
  @Input('appBetterHighlight') highlightColor: string = "darkorange"
  @Input() set mojaMetoda(condition: boolean) {
    if(condition) {
      this.renderer.addClass(this.element.nativeElement, 'najvecja')
    }
  }

  @HostBinding('style.backgroundColor') ozadje: string = this.defaultOzadje
  @HostBinding('style.border') vogalcek: string = "none"

  @HostListener('mouseenter') mouseEnterFunction() {
    this.ozadje = this.highlightColor
    this.vogalcek = "4px solid maroon"
  }
  @HostListener('mouseleave') mouseLeaveFunckija() {
    this.ozadje = this.defaultOzadje
    this.vogalcek = "4px solid tan"
  }

  ngOnInit(): void {
    this.ozadje = this.defaultOzadje
  }
}
