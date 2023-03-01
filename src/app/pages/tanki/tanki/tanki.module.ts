import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyTankComponent } from '../heavy-tank/heavy-tank.component';
import { TankiRoutingModule } from '../tanki-routing.module';

@NgModule({
  declarations: [HeavyTankComponent],
  imports: [CommonModule, TankiRoutingModule],
  exports: [HeavyTankComponent],
})
export class TankiModule {}
