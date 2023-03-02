import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeavyTankComponent } from './heavy-tank/heavy-tank.component';

const routes: Routes = [
  {
    path: '',
    component: HeavyTankComponent,
  },
  {
    path: 'tanki',
    component: HeavyTankComponent,
  },
  {
    path: 'pages/tanki',
    component: HeavyTankComponent,
  },
  {
    path: 'pages/tanki/heavy-tank',
    component: HeavyTankComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankiRoutingModule {}
