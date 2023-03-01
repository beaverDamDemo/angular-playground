import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TankiRoutingModule } from './tanki-routing.module';
import { HeavyTankComponent } from './heavy-tank/heavy-tank.component';

@NgModule({
  declarations: [HeavyTankComponent],
  imports: [CommonModule, TankiRoutingModule],
})
export class TankiModule {}
