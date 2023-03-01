import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectricGrindersModule } from './electric-grinders/electric-grinders.module';
import { GrindersComponent } from './grinders.component';
import { LidlComponent } from './electric-grinders/lidl/lidl.component';

@NgModule({
  declarations: [LidlComponent],
  imports: [CommonModule, ElectricGrindersModule],
  exports: [LidlComponent],
})
export class GrindersModule {}
