import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verige',
  template: `
    <p>verige works!</p>
    <button fullWidth="" nbButton status="success">button</button>
    <div class="parent">
      <div class="left">
        <h5>verige</h5>
        <ul>
          <li>husky<button>-></button></li>
          <li>rgchain<button>-></button></li>
          <li>low-profile<button>-></button></li>
          <li>normal-profile<button>-></button></li>
          <li>full-skip<button>-></button></li>
        </ul>
      </div>
      <div class="right">
        <h5>opis</h5>
      </div>
    </div>
  `,
  styles: [
    `
      ul li {
        text-decoration: none;
        list-style-type: none;
      }
      div.parent {
        background: beige;
        display: flex;
        width: 100%;
        padding: 0.25rem;
      }
      div.left {
        background: slategrey;
        width: 40%;
      }
      div.right {
        background: azure;
        flex-grow: 1;
      }
    `,
  ],
})
export class VerigeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
