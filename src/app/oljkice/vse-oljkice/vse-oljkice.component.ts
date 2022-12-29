import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vse-oljkice',
  templateUrl: './vse-oljkice.component.html',
  styleUrls: ['./vse-oljkice.component.scss']
})
export class VseOljkiceComponent implements OnInit {
  titlie: 'diinangular';
  url = undefined;
  data: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSendData() {
    this.data = this.url.indexOf();
  }

}
