import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpravkiService } from '../opravki.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-top-part',
  standalone: true,
  imports: [CommonModule, MatInputModule],
  templateUrl: './top-part.component.html',
  styleUrl: './top-part.component.scss',
})
export class TopPartComponent {
  opravkiService = inject(OpravkiService);
  text: any;

  changeText(event: Event) {
    const myText = event.target as HTMLInputElement;
    this.text = myText.value;
  }
  addOpravek() {
    throw new Error('Method not implemented.');
  }
}
