import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
} from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbThemeModule,
    NbMenuModule,
    NbSidebarModule,
    NbButtonModule,
  ],
  exports: [],
})
export class VerigeModule {}
