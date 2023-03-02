import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerigeDetailComponent } from '../verige-detail/verige-detail.component';
import { ChainsawComponent } from './chainsaw.component';

const routes: Routes = [
  {
    path: 'pages/verige',
    component: ChainsawComponent,
    children: [
      {
        path: ':id',
        component: VerigeDetailComponent,
      },
    ],
  },
  {
    path: 'pages/chainsaw',
    component: ChainsawComponent,
  },
  {
    path: 'foo',
    redirectTo: '/fighter',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ChainsawComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChainsawRoutingModule {}
