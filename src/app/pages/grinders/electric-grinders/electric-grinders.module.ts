import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LidlComponent } from './lidl/lidl.component';
import { HoferComponent } from './hofer/hofer.component';



@NgModule({
  declarations: [
    LidlComponent,
    HoferComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElectricGrindersModule { }
