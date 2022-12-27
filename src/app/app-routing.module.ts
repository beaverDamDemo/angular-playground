import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarsFromApiComponent } from './pages/cars-from-api/cars-from-api.component';
import { DraggableComponent } from './pages/draggable/draggable.component';
import { KamjonComponent } from './pages/kamjon/kamjon.component';
import { SingleCarDisplayComponent } from './pages/single-car-display/single-car-display.component';
import { WhoresComponent } from './pages/whores/whores.component';
import { ZemljevidComponent } from './pages/zemljevid/zemljevid.component';

const routes: Routes = [
  {
    path: "pages/draggable",
    component: DraggableComponent,
  },
  {
    path: "pages/single-car-display",
    component: SingleCarDisplayComponent,
  },
  {
    path: "pages/cars-from-api",
    component: CarsFromApiComponent,
  },
  {
    path: "pages/about",
    component: AboutComponent,
  },
  {
    path: "pages/zemljevid",
    component: ZemljevidComponent,
  },
  {
    path: "pages/kamjon",
    component: KamjonComponent,
  },
  {
    path: "pages/whores",
    component: WhoresComponent,
  },
  {
    path: "drevi",
    loadChildren: () =>
      import("./drevi/drevi.module").then(module => module.DreviModule)
  },
  {
    path: 'avti-iz-oglasov',
    loadChildren: () =>
      import('./avti-iz-oglasov/avti-iz-oglasov.module').then(module => module.AvtiIzOglasovModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
