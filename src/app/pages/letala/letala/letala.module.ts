import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FighterComponent } from '../fighter/fighter.component';

@NgModule({
  declarations: [FighterComponent],
  imports: [CommonModule],
  exports: [FighterComponent],
})
export class LetalaModule {}
