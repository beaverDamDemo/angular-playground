import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpravkiService } from '../opravki.service';
import { FilterEnum } from '../types/filter.enum';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bottom-part',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './bottom-part.component.html',
  styleUrl: './bottom-part.component.scss',
})
export class BottomPartComponent {
  opravkiService = inject(OpravkiService);
  filter = this.opravkiService.filterSignal();
  filterSignal = this.opravkiService.filterSignal;
  filterEnum = FilterEnum;
  activeCount = computed(() => {
    return this.opravkiService.opravkiSignal().filter((f) => !f.isCompleted)
      .length;
  });
  noOpravkiClass = computed(() => {
    return this.opravkiService.opravkiSignal().length === 0;
  });
  itemsLeftText = computed(() => {
    return `item${this.activeCount() !== 1 ? 's' : ''} left`;
  });

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.opravkiService.changeFilter(filterName);
  }
}
