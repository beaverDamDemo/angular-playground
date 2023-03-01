import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LidlComponent } from './lidl/lidl.component';
import { CheapOneComponent } from './hofer/cheap-one/cheap-one.component';

@NgModule({
  declarations: [LidlComponent],
  imports: [CommonModule],
})
export class ElectricGrindersModule {}
