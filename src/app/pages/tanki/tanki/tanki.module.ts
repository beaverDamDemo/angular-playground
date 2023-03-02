import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyTankComponent } from '../heavy-tank/heavy-tank.component';
import { TankiRoutingModule } from '../tanki-routing.module';
import { UssrComponent } from '../heavy-tank/ussr/ussr.component';

@NgModule({
  declarations: [HeavyTankComponent, UssrComponent],
  imports: [CommonModule, TankiRoutingModule],
  exports: [HeavyTankComponent, UssrComponent],
})
export class TankiModule {}
