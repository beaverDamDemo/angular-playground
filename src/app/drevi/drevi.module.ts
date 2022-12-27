import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DreviRoutingModule } from './drevi-routing.module';
import { KacijaComponent } from './kacija/kacija.component';
import { NjelComponent } from './njel/njel.component';
import { DreviComponent } from './drevi/drevi.component';


@NgModule({
  declarations: [
    KacijaComponent,
    NjelComponent,
    DreviComponent
  ],
  imports: [
    CommonModule,
    DreviRoutingModule
  ]
})
export class DreviModule { }
