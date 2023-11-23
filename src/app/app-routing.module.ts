import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarsFromApiComponent } from './pages/cars-from-api/cars-from-api.component';
import { ChainsawComponent } from './pages/chainsaw/chainsaw.component';
import { DraggableComponent } from './pages/draggable/draggable.component';
import { HomeComponent } from './pages/home/home.component';
import { KamjonComponent } from './pages/kamjon/kamjon.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SingleCarDisplayComponent } from './pages/single-car-display/single-car-display.component';
import { WhoresComponent } from './pages/whores/whores.component';
import { ZemljevidComponent } from './pages/zemljevid/zemljevid.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pages/draggable',
    component: DraggableComponent,
  },
  {
    path: 'pages/single-car-display',
    component: SingleCarDisplayComponent,
  },
  {
    path: 'pages/cars-from-api',
    component: CarsFromApiComponent,
  },
  {
    path: 'pages/about',
    component: AboutComponent,
  },
  {
    path: 'pages/zemljevid',
    component: ZemljevidComponent,
  },
  {
    path: 'pages/kamjon',
    component: KamjonComponent,
  },
  {
    path: 'pages/whores',
    component: WhoresComponent,
  },
  {
    path: 'pages/chainsaw',
    loadChildren: () =>
      import('./pages/chainsaw/chainsaw.module').then((m) => m.ChainsawModule),
  },
  {
    path: 'pages/tanki',
    loadChildren: () =>
      import('./pages/tanki/tanki/tanki.module').then(
        (module) => module.TankiModule
      ),
  },
  {
    path: 'avti-iz-oglasov',
    loadChildren: () =>
      import('./avti-iz-oglasov/avti-iz-oglasov.module').then(
        (module) => module.AvtiIzOglasovModule
      ),
  },
  {
    path: 'drevi',
    loadChildren: () =>
      import('./drevi/drevi.module').then((module) => module.DreviModule),
  },
  {
    path: 'pages/letala',
    loadChildren: () =>
      import('./pages/letala/letala.module').then(
        (module) => module.LetalaModule
      ),
  },
  {
    path: 'myassistant',
    loadChildren: () =>
      import('./myassistant/myassistant.module').then(
        (module) => module.MyassistantModule
      ),
  },
  {
    path: 'oljkice',
    loadChildren: () =>
      import('./oljkice/oljkice/oljkice.module').then(
        (module) => module.OljkiceModule
      ),
  },
  {
    path: 'cesen',
    loadComponent: () =>
      import('./cesen/cesen.component').then((m) => m.CesenComponent),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
