import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './game/control-panel/control-panel.component';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
