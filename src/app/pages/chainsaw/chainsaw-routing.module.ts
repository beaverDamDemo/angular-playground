import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChainsawComponent } from './chainsaw.component';

const routes: Routes = [
  {
    path: '',
    component: ChainsawComponent,
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
