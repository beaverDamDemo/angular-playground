import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OljkiceRoutingModule } from './oljkice-routing.module';
import { OljkiceService } from './oljkice.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OljkiceRoutingModule
  ],
  providers: [
    OljkiceService
  ]
})
export class OljkiceModule { }
