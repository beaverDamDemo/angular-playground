import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FighterComponent } from './fighter/fighter.component';
import { LetalaComponent } from './letala.component';

const routes: Routes = [
  {
    path: '',
    component: LetalaComponent,
  },
  {
    path: 'foo',
    redirectTo: '/fighter',
    pathMatch: 'full',
  },
  {
    path: 'fighter',
    component: FighterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetalaRoutingModule {}
