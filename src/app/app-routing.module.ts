import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraggableComponent } from './pages/draggable/draggable.component';
import { SingleCarDisplayComponent } from './pages/single-car-display/single-car-display.component';

const routes: Routes = [
  {
    path: "pages/draggable",
    component: DraggableComponent
  },
  {
    path: "pages/single-car-display",
    component: SingleCarDisplayComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
