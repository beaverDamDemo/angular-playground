import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrekujaComponent } from './brekuja.component';
import { DreviModule } from '../drevi.module';
import { PaneDirective } from './pane.directive';



@NgModule({
  declarations: [
    BrekujaComponent,
    PaneDirective,
  ],
  imports: [
    CommonModule
  ],
  providers: [DreviModule]
})
export class BrekujaModule { }
