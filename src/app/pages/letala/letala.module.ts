import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetalaRoutingModule } from './letala-routing.module';
import { FighterComponent } from './fighter/fighter.component';
import { LetalaComponent } from './letala.component';
import { NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [FighterComponent, LetalaComponent],
  imports: [CommonModule, LetalaRoutingModule, NbButtonModule],
  exports: [FighterComponent],
})
export class LetalaModule {}
