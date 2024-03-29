import { Injectable, Signal, signal } from '@angular/core';
import { Opravki } from './opravki';
import { FilterEnum } from './types/filter.enum';
@Injectable({
  providedIn: 'root',
})
export class OpravkiService {
  opravkiSignal = signal<Opravki[]>([
    // {
    //   text: 'Akala badula',
    //   id: '10009999ffefffef',
    //   isCompleted: false,
    // },
  ]);
  filterSignal = signal<FilterEnum>(FilterEnum.all);

  constructor() {}

  getAll(): Opravki[] {
    return this.opravkiSignal();
  }

  addOpravek(text: string): void {
    console.log('🛍️ ~ addOpravek:', text);
    const newOpravek: Opravki = {
      text: text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    this.opravkiSignal.update((o) => [...o, newOpravek]);
  }

  changeFilter(filterName: FilterEnum): void {
    this.filterSignal.set(filterName);
  }

  changeOpravek(id: string, text: string): void {
    this.opravkiSignal.update((o) =>
      o.map((m) => (m.id === id ? { ...m, text } : m))
    );
  }

  deleteOpravek(id: string): void {
    this.opravkiSignal.update((vsi) => vsi.filter((eden) => eden.id !== id));
  }

  toggleOpravek(id: string): void {
    this.opravkiSignal.update((o) =>
      o.map((m) => (m.id === id ? { ...m, isCompleted: !m.isCompleted } : m))
    );
  }
}
