import { Injectable, Signal, signal } from '@angular/core';
import { Opravki } from './opravki';
@Injectable({
  providedIn: 'root',
})
export class OpravkiService {
  opravkiSignal = signal<Opravki[]>([
    {
      text: 'Akala badula',
      id: '1000',
      isCompleted: false,
    },
  ]);

  constructor() {}

  getAll(): Opravki[] {
    return this.opravkiSignal();
  }

  addOpravek(text: string): void {
    const newOpravek: Opravki = {
      text: text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    this.opravkiSignal.update((o) => [...o, newOpravek]);
  }
}
