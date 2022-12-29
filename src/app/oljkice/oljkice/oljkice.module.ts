import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OljkiceRoutingModule } from './oljkice-routing.module';
import { OljkiceService } from './oljkice.service';
import { GlobalerrorhandlerService } from './globalerrorhandler.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OljkiceRoutingModule
  ],
  providers: [
    OljkiceService,
    {
      provide: ErrorHandler, useClass: GlobalerrorhandlerService
    }
  ]
})
export class OljkiceModule { }
