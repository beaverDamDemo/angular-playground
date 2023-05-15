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

@NgModule({
  declarations: [SpisekComponent],
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
