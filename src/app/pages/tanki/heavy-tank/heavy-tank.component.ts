import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-tank',
  template: `
    <div [innerText]="labelcek"></div>
    <div #subheader (click)="onSubheaderClick()">Subheader</div>
    <div style="background: red">
      •OnInit: This is called when a component is initialized
    </div>
    <div style="background: darkorange">
      •OnDestroy: This is called when a component is destroyed
    </div>
    <div style="background: orange">
      •OnChanges: This is called when values of input binding properties in the
      component change
    </div>
    <div style="background: sandybrown">
      •AfterViewInit: This is called when Angular initializes the view of the
      current component and its child components
    </div>
  `,
  styles: [],
})
export class HeavyTankComponent implements OnInit, OnDestroy {
  labelcek: string = 'I am heavy tank';
  constructor() {}

  ngOnInit(): void {}
  onSubheaderClick() {
    console.log('⚛ ~ onSubheaderClick:');
  }
  ngOnDestroy(): void {
    console.log('to do in ngondestroy, Resetting timers and intervals');
    console.log('to do in ngondestroy, Unsubscribing from observable streams');
  }
}
