import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KacijaComponent } from './kacija/kacija.component';
import { NjelComponent } from './njel/njel.component';

const routes: Routes = [
  {
    path: 'kacija',
    component: KacijaComponent
  },
  {
    path: "njel",
    component: NjelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DreviRoutingModule { }
