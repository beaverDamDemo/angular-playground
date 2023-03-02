import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verige',
  template: `
    <p>verige works!</p>
    <button fullWidth="" nbButton status="success">button</button>
    <div class="parent">
      <div class="left">
        <h5>left part</h5>
        <ul>
          <li>husky</li>
          <li>rgchain</li>
          <li>low-profile</li>
          <li>normal-profile</li>
          <li>full-skip</li>
        </ul>
      </div>
      <div class="right">
        <h5>right part</h5>
      </div>
    </div>
  `,
  styles: [
    `
      div.parent {
        background: lightblue;
      }
      div.left {
        background: slategrey;
      }
      div.right {
        background: azure;
      }
    `,
  ],
})
export class VerigeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
