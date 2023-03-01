import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrindersModule } from '../grinders/grinders.module';
import { VerigeModule } from '../verige/verige.module';
import { ChainsawComponent } from './chainsaw.component';

@NgModule({
  declarations: [ChainsawComponent],
  imports: [CommonModule, GrindersModule, VerigeModule],
})
export class ChainsawModule {}
