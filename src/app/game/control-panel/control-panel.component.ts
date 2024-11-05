// src/app/game/control-panel/control-panel.component.ts
import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  constructor(private gameService: GameService) {}

  resetGame(): void {
    this.gameService.resetBoard();
  }
}
