import { Component, OnInit } from '@angular/core';

type drivetrains = 'front' | 'rear' | '4wd' | 'awd';
type valvetrains = 'sohc' | 'dohc';
interface car {
  drivetrain: drivetrains;
  valvetrain: valvetrains;
}
@Component({
  selector: 'app-juliaiva',
  template: ` <p>juliaiva works!</p> `,
  styles: [],
})
export class JuliaivaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const cartelletta = {
      aspetto: 'tecnico' as string,
      fatto: 'non si tratta' as string | number,
    };
    cartelletta.aspetto = cartelletta.aspetto.toUpperCase();
    cartelletta['base'] = 'base';
    console.log('⚛ ~ cartelletta:', cartelletta);
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];
    enum barve {
      rdeca,
      plava,
      zelena,
      oranzna,
      viola,
      roza,
    }
    const amb: barve = barve.viola;
    console.log('⚛ ~ amb:', amb);

    colors[2] = 'kramatorsk';
    console.log('⚛ ~ colors:', colors);

    const p_911: car = {
      drivetrain: 'rear',
      valvetrain: 'sohc',
    };
  }
}
