import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheapOneComponent } from './cheap-one/cheap-one.component';
import { CheapOneModule } from './cheap-one/cheap-one.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CheapOneModule],
  exports: [],
})
export class HoferModule {}
