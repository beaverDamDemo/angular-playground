import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrindersModule } from '../grinders/grinders.module';
import { ChainsawComponent } from './chainsaw.component';
import { VerigeComponent } from '../verige/verige.component';
import { GrindersComponent } from '../grinders/grinders.component';
import { ChainsawRoutingModule } from './chainsaw-routing.module';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [ChainsawComponent, VerigeComponent, GrindersComponent],
  imports: [CommonModule, ChainsawRoutingModule, NbButtonModule],
})
export class ChainsawModule {}
