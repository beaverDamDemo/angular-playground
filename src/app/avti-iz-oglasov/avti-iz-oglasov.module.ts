import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvtiIzOglasovRoutingModule } from './avti-iz-oglasov-routing.module';
import { SpisekComponent } from './spisek/spisek.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
} from '@nebular/theme';
import { JuliaivaComponent } from '../myassistant/juliaiva/juliaiva/juliaiva.component';

@NgModule({
  declarations: [SpisekComponent, JuliaivaComponent],
  imports: [
    CommonModule,
    AvtiIzOglasovRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
  ],
})
export class AvtiIzOglasovModule {}
