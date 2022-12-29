import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrekujaComponent } from './brekuja/brekuja.component';
import { DreviComponent } from './drevi/drevi.component';
import { KacijaComponent } from './kacija/kacija.component';
import { NjelComponent } from './njel/njel.component';

const routes: Routes = [
  {
    path: "",
    component: DreviComponent
  },
  {
    path: 'kacija',
    component: KacijaComponent
  },
  {
    path: "njel",
    component: NjelComponent
  },
  {
    path: "brekuja",
    component: BrekujaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DreviRoutingModule { }
