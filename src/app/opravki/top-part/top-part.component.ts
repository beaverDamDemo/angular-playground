import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpravkiService } from '../opravki.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-top-part',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule],
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
    this.opravkiService.addOpravek(this.text);
    this.text = '';
  }
}
