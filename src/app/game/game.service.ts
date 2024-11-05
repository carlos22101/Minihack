
import { Injectable } from '@angular/core';

export interface Cell {
  hasMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighboringMines: number;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private board: Cell[][] = [];
  private rows = 10;
  private cols = 10;
  private mines = 10;

  constructor() {
    this.resetBoard();
  }

  resetBoard(): void {
    this.board = [];
    for (let r = 0; r < this.rows; r++) {
      this.board[r] = [];
      for (let c = 0; c < this.cols; c++) {
        this.board[r][c] = {
          hasMine: false,
          isRevealed: false,
          isFlagged: false,
          neighboringMines: 0,
        };
      }
    }
    this.placeMines();
    this.calculateNeighboringMines();
  }

  private placeMines(): void {
    let placedMines = 0;
    while (placedMines < this.mines) {
      const row = Math.floor(Math.random() * this.rows);
      const col = Math.floor(Math.random() * this.cols);
      if (!this.board[row][col].hasMine) {
        this.board[row][col].hasMine = true;
        placedMines++;
      }
    }
  }

  private calculateNeighboringMines(): void {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],         [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.board[r][c].hasMine) continue;
        let count = 0;
        for (const [dr, dc] of directions) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols && this.board[nr][nc].hasMine) {
            count++;
          }
        }
        this.board[r][c].neighboringMines = count;
      }
    }
  }

  getBoard(): Cell[][] {
    return this.board;
  }

  revealCell(row: number, col: number): void {
    const cell = this.board[row][col];
    if (cell.isRevealed || cell.isFlagged) return;
    cell.isRevealed = true;
    if (cell.neighboringMines === 0 && !cell.hasMine) {
      this.revealNeighbors(row, col);
    }
  }

  private revealNeighbors(row: number, col: number): void {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],         [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    for (const [dr, dc] of directions) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
        this.revealCell(nr, nc);
      }
    }
  }
}
