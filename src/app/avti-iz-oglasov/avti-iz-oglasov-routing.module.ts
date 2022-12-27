import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpisekComponent } from './spisek/spisek.component';

const routes: Routes = [
  {
    path: "",
    component: SpisekComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvtiIzOglasovRoutingModule { }
