import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellComponent } from './cell/cell.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { GameBoardComponent } from './game-board/game-board.component';



@NgModule({
  declarations: [
    CellComponent,
    ControlPanelComponent,
    GameBoardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GameModule { }
