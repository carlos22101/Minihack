// src/app/game/cell/cell.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../game.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() cell!: Cell;
  @Output() reveal = new EventEmitter<void>();

  revealCell(): void {
    this.reveal.emit();
  }
}
