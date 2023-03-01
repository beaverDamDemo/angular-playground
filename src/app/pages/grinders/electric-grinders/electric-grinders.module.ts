import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LidlComponent } from './lidl/lidl.component';
import { CheapOneComponent } from './hofer/cheap-one/cheap-one.component';
import { TistiDragComponent } from './lidl/tisti-drag/tisti-drag.component';

@NgModule({
  declarations: [TistiDragComponent],
  imports: [CommonModule],
  exports: [],
})
export class ElectricGrindersModule {}
