import { Component, OnInit } from '@angular/core';

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
    colors[2] = 'kramatorsk';
    console.log('⚛ ~ colors:', colors);
  }
}
