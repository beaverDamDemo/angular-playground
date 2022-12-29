import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomaComponent } from '../doma/doma.component';
import { ParSvetiDuhComponent } from '../par-sveti-duh/par-sveti-duh.component';
import { VseOljkiceComponent } from '../vse-oljkice/vse-oljkice.component';

const routes: Routes = [
  {
    path: "",
    component: VseOljkiceComponent
  },
  {
    path: "doma",
    component: DomaComponent
  },
  {
    path: "parsvetiduh",
    component: ParSvetiDuhComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OljkiceRoutingModule { }
