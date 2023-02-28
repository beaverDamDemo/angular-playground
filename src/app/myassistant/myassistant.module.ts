import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyassistantRoutingModule } from './myassistant-routing.module';
import { JuliaivaComponent } from './juliaiva/juliaiva/juliaiva.component';


@NgModule({
  declarations: [
    JuliaivaComponent
  ],
  imports: [
    CommonModule,
    MyassistantRoutingModule
  ]
})
export class MyassistantModule { }
