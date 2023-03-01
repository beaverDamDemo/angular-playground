import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyTankComponent } from '../heavy-tank/heavy-tank.component';

@NgModule({
  declarations: [HeavyTankComponent],
  imports: [CommonModule],
  exports: [HeavyTankComponent],
})
export class TankiModule {}
