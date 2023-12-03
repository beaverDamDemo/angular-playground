import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Opravki } from '../opravki';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-single-opravek',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './single-opravek.component.html',
  styles: `
    .editing {
      color: yellow;
    }
  `,
})
export class SingleOpravekComponent implements OnInit {
  editingText: string = '';
  @Input({ required: true }) opravek!: Opravki;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();

  ngOnInit(): void {
    this.editingText = this.opravek.text;
  }

  changeOpravek() {
    this.setEditingId.emit(null);
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  setOpravekInEditMode() {
    this.setEditingId.emit(this.opravek.id);
  }
}
