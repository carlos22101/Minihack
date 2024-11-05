
import { Component, OnInit } from '@angular/core';
import { GameService, Cell } from '../game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  board: Cell[][] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.board = this.gameService.getBoard();
  }

  revealCell(row: number, col: number): void {
    this.gameService.revealCell(row, col);
  }
}
