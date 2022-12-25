import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNajvecja]'
})
export class NajvecjaDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appNajvecja(condition: boolean) {
    if(condition) {
      this.renderer.addClass(this.element.nativeElement, 'najvecja')
    }
  }

}
