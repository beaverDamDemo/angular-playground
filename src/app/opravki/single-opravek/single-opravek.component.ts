import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Opravki } from '../opravki';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { OpravkiService } from '../opravki.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-single-opravek',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './single-opravek.component.html',
  styles: `
    .editing {
      color: firebrick;
    }
  `,
})
export class SingleOpravekComponent implements OnInit {
  opravkiService = inject(OpravkiService);
  editingText: string = '';
  @Input({ required: true }) opravek!: Opravki;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();

  ngOnInit(): void {
    this.editingText = this.opravek.text;
  }

  changeOpravek() {
    this.opravkiService.changeOpravek(this.opravek.id, this.editingText);
    this.setEditingId.emit(null);
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  setOpravekInEditMode() {
    this.setEditingId.emit(this.opravek.id);
  }

  onDelete() {
    this.opravkiService.deleteOpravek(this.opravek.id);
  }
}
