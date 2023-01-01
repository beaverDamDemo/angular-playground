import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DreviRoutingModule } from './drevi-routing.module';
import { KacijaComponent } from './kacija/kacija.component';
import { NjelComponent } from './njel/njel.component';
import { DreviComponent } from './drevi/drevi.component';
import { LoggerDefaultService } from './services/logger-default.service';
import { LoggerBlueService } from './services/logger-blue.service';
import { APIKEY_we_will_use_this_to_pass_value } from './value';
import { NbMenuItem, NbMenuModule } from '@nebular/theme';
import { YellowizeDirective } from '../directives/yellowize.directive';


@NgModule({
  declarations: [
    KacijaComponent,
    NjelComponent,
    DreviComponent,

  ],
  imports: [
    CommonModule,
    DreviRoutingModule,
    NbMenuModule
  ],
  providers: [
    {
      provide: LoggerDefaultService,
      useClass: LoggerDefaultService
    },
    {
      provide: APIKEY_we_will_use_this_to_pass_value, useValue: { apikey: '123456' }
    }
  ],
  bootstrap: [],
  entryComponents: []
})
export class DreviModule { }
