import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraggableComponent } from './pages/draggable/draggable.component';

const routes: Routes = [
  {
    path: "pages/draggable",
    component: DraggableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
