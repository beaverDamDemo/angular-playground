import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FighterComponent } from './fighter/fighter.component';

const routes: Routes = [
  {
    path: '',
    component: FighterComponent,
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
