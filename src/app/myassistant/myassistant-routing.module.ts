import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyassistantComponent } from './myassistant.component';

const routes: Routes = [{
  path: "",
  component: MyassistantComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyassistantRoutingModule { }
