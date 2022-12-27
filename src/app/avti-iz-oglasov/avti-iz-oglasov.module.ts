import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvtiIzOglasovRoutingModule } from './avti-iz-oglasov-routing.module';
import { SpisekComponent } from './spisek/spisek.component';


@NgModule({
  declarations: [
    SpisekComponent
  ],
  imports: [
    CommonModule,
    AvtiIzOglasovRoutingModule
  ]
})
export class AvtiIzOglasovModule { }
