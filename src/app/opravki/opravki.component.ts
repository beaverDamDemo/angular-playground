import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Opravki } from './opravki';
import { OpravkiService } from './opravki.service';
import { TopPartComponent } from './top-part/top-part.component';
@Component({
  selector: 'app-opravki',
  standalone: true,
  imports: [CommonModule, TopPartComponent],
  templateUrl: './opravki.component.html',
  styleUrl: './opravki.component.scss',
})
export class OpravkiComponent implements OnInit {
  opravkiService = inject(OpravkiService);
  opravki: Opravki[] = [];
  ngOnInit(): void {
    this.opravki = this.opravkiService.getAll();
  }
}
