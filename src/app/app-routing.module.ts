import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarsFromApiComponent } from './pages/cars-from-api/cars-from-api.component';
import { DraggableComponent } from './pages/draggable/draggable.component';
import { SingleCarDisplayComponent } from './pages/single-car-display/single-car-display.component';
import { ZemljevidComponent } from './pages/zemljevid/zemljevid.component';

const routes: Routes = [
  {
    path: "pages/draggable",
    component: DraggableComponent
  },
  {
    path: "pages/single-car-display",
    component: SingleCarDisplayComponent
  },
  {
    path: "pages/cars-from-api",
    component: CarsFromApiComponent
  },
  {
    path: "pages/about",
    component: AboutComponent
  },
  {
    path: "pages/zemljevid",
    component: ZemljevidComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
