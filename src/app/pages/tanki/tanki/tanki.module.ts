import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyTankComponent } from '../heavy-tank/heavy-tank.component';
import { TankiRoutingModule } from '../tanki-routing.module';
import { UssrComponent } from '../heavy-tank/ussr/ussr.component';
import { Kv1Component } from '../heavy-tank/ussr/kv1/kv1.component';
import { Su85Component } from '../heavy-tank/ussr/su85/su85.component';

@NgModule({
  declarations: [
    HeavyTankComponent,
    UssrComponent,
    Kv1Component,
    Su85Component,
  ],
  imports: [CommonModule, TankiRoutingModule],
  exports: [HeavyTankComponent, UssrComponent, Kv1Component, Su85Component],
})
export class TankiModule {}
