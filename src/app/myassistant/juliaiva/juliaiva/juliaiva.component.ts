import { Component, OnInit } from '@angular/core';

type drivetrains = 'front' | 'rear' | '4wd' | 'awd';
type valvetrains = 'sohc' | 'dohc';
interface car {
  drivetrain: drivetrains;
  valvetrain: valvetrains;
  chassis?: string;
}
class truck implements car {
  drivetrain: drivetrains;
  valvetrain: valvetrains;
}
@Component({
  selector: 'app-juliaiva',
  template: ` <p>juliaiva works!</p> `,
  styles: [],
})
export class JuliaivaComponent implements OnInit {
  tanjina: string = 'juliaiva';
  fox: string = 'fox';
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

    const mubarak = function (name: string): string {
      // ta ima svoj this
      return `hello ${name}`;
    };
    console.log('⚛ ~ mubarak:', mubarak('tanja'));

    const ruby = (name: string, surname: string = 'lovely'): string => {
      // ta ima this od parenta, nima svojega
      return `hello ${name} ${this.tanjina} ${surname}`;
    };
    console.log('⚛ ~ ruby:', ruby('tanja'));

    const takobitrebanareditvprasaj: (name: string) => string = function (
      name: string
    ): string {
      // ta ima svoj this
      return `hello ${name}`;
    };
    console.log(
      '⚛ ~ takobitrebanareditvprasaj:',
      takobitrebanareditvprasaj('tanja')
    );

    const sayHello: (name: string) => string = function (name: string): string {
      // ta ima svoj this
      return `hello ${name}`;
    };
    console.log('⚛ ~ sayHello:', sayHello('tanja'));

    function greeter(fn: (a: string) => void) {
      fn('Hello, World');
    }
    function log(l) {
      console.log(l);
    }
    greeter(log);

    function greetPeople(greeting: string, names: string[]): string {
      return greeting + ', ' + names.join(' and ') + '!';
    }
    console.log(greetPeople('hej', ['John', 'Jane', 'Jonathan', 'Mary']));

    function greetPeople_2(greeting: string, ...names: string[]): string {
      return greeting + ', ' + names.join(' and ') + '!';
    }
    console.log(greetPeople_2('hej', 'John', 'Jane', 'Jonathan', 'Mary'));

    const greetPeople_3 = (greeting: string, ...names: string[]): string =>
      greeting + ', ' + names.join(' and ') + '!';
    console.log(greetPeople_3('hej', 'John', 'Jane', 'Jonathan', 'Mary'));

    const animals = ['dog', 'cat', 'pig', 'fish', 'bird'];
    console.log('⚛ ~ ...animals:', ...animals);

    const beasts = [...animals, 'cat', 'pig', 'fish', 'bird'];
    console.log('⚛ ~ beasts:', beasts);

    const p_911_t = {
      ...p_911,
      price: 275000,
    };
    console.log('⚛ ~ p_911_t:', p_911_t);

    function metoda(name: any): any {
      return name;
    }
    console.log(metoda(1000));

    interface Shape {
      area(): number;
      circumference(): number;
    }
    class Square implements Shape {
      area() {
        return 1;
      }
      circumference(): number {
        return 4;
      }
    }
    class Circle implements Shape {
      area() {
        return 3.14;
      }
      circumference(): number {
        return 6.28;
      }
    }
    function allAreas<T extends Shape>(...args: T[]): number {
      let total = 0;
      args.forEach((x) => {
        total += x.area();
      });
      return total;
    }
    allAreas(new Square(), new Circle());
    let krogec = new Square();
    let k = krogec?.area();
  }
}
