import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrindersModule } from '../grinders/grinders.module';
import { ChainsawComponent } from './chainsaw.component';
import { VerigeComponent } from '../verige/verige.component';
import { GrindersComponent } from '../grinders/grinders.component';

@NgModule({
  declarations: [ChainsawComponent, VerigeComponent, GrindersComponent],
  imports: [CommonModule],
})
export class ChainsawModule {}
