import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Opravki } from './opravki';
import { OpravkiService } from './opravki.service';
import { TopPartComponent } from './top-part/top-part.component';
import { FilterEnum } from './types/filter.enum';
import { BottomPartComponent } from './bottom-part/bottom-part.component';
import { SingleOpravekComponent } from './single-opravek/single-opravek.component';

@Component({
  selector: 'app-opravki',
  standalone: true,
  imports: [
    CommonModule,
    TopPartComponent,
    BottomPartComponent,
    SingleOpravekComponent,
  ],
  templateUrl: './opravki.component.html',
  styleUrl: './opravki.component.scss',
})
export class OpravkiComponent implements OnInit {
  opravkiService = inject(OpravkiService);
  visibleOpravki = computed(() => {
    const c = this.opravkiService.opravkiSignal();
    const filter = this.opravkiService.filterSignal();
    if (filter === FilterEnum.active) {
      return c.filter((f) => !f.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return c.filter((f) => f.isCompleted);
    } else {
      return c;
    }
  });
  
  editingId: string | null = null;

  ngOnInit(): void {}

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }
}
