import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-opravek',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-opravek.component.html',
  styles: ``
})
export class SingleOpravekComponent {

@Input() id;
@Input() text;
}
