import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cesen',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule,MatButtonModule],
  templateUrl: './cesen.component.html',
  styleUrl: './cesen.component.scss'
})
export class CesenComponent {

}
