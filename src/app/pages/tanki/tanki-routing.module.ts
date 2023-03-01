import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeavyTankComponent } from './heavy-tank/heavy-tank.component';
import { TankiComponent } from './tanki/tanki.component';

const routes: Routes = [
  {
    path: '',
    component: HeavyTankComponent,
  },
  {
    path: 'tanki',
    component: TankiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankiRoutingModule {}
