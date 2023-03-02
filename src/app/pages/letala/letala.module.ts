import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetalaRoutingModule } from './letala-routing.module';
import { FighterComponent } from './fighter/fighter.component';

@NgModule({
  declarations: [FighterComponent],
  imports: [CommonModule, LetalaRoutingModule],
  exports: [FighterComponent],
})
export class LetalaModule {}
