import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectricGrindersModule } from './electric-grinders/electric-grinders.module';
import { TistiDragComponent } from './electric-grinders/lidl/tisti-drag/tisti-drag.component';

@NgModule({
  declarations: [TistiDragComponent],
  imports: [CommonModule, ElectricGrindersModule],
  exports: [],
})
export class GrindersModule {}
