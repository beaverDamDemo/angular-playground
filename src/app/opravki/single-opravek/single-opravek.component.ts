import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
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
    .completed {
      color: lime;
    }
  `,
})
export class SingleOpravekComponent implements OnInit, OnChanges {
  opravkiService = inject(OpravkiService);
  editingText: string = '';
  @Input({ required: true }) opravek!: Opravki;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
  @ViewChild('textInput') textInput?: ElementRef;

  ngOnInit(): void {
    this.editingText = this.opravek.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isEditing'].currentValue) {
      setTimeout(()=>{
        this.textInput?.nativeElement.focus();
      }, 0)
    }
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

  toggleOpravek() {
    this.opravkiService.toggleOpravek(this.opravek.id);
  }
}
