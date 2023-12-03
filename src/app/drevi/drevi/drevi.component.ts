import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  WritableSignal,
  Signal,
  signal,
  computed,
  effect,
} from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { BehaviorSubject, interval } from 'rxjs';

interface Drev {
  title: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-drevi',
  templateUrl: './drevi.component.html',
  styleUrl: './drevi.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DreviComponent implements OnInit {
  items: Drev[] = [
    {
      title: 'Brekuja',
      icon: 'person-outline',
      link: 'brekuja',
    },
    {
      title: 'Kacija',
      icon: 'lock-outline',
      link: 'kacija',
    },
    {
      title: 'Njel',
      icon: 'checkmark-outline',
      link: 'njel',
    },
  ];
  sumOfItems: number = 0;
  signalcek: WritableSignal<number> = signal(0);
  writableSingalcek: WritableSignal<number> = signal(0);
  sumOfItemsPercentageComputed: Signal<number> = computed(() => {
    return this.writableSingalcek() * 100;
  });
  sumOfItemsPercentageRxjs$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  constructor() {
    effect(()=>{
      console.log(this.sumOfItemsPercentageComputed())
    })
  }

  ngOnInit(): void {}

  addItem() {
    this.sumOfItems += 1;
    this.signalcek.set(this.sumOfItems);
    this.writableSingalcek.set(this.sumOfItems);
    this.sumOfItemsPercentageRxjs$.next(this.sumOfItems * 100);
  }

  removeItem() {
    this.sumOfItems -= 1;
    this.signalcek.set(this.sumOfItems);
    this.writableSingalcek.set(this.sumOfItems);
    this.sumOfItemsPercentageRxjs$.next(this.sumOfItems * 100);
  }
}
