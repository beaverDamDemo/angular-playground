import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrindersModule } from '../grinders/grinders.module';
import { ChainsawComponent } from './chainsaw.component';
import { VerigeComponent } from '../verige/verige.component';

@NgModule({
  declarations: [ChainsawComponent, VerigeComponent],
  imports: [CommonModule, GrindersModule],
})
export class ChainsawModule {}
