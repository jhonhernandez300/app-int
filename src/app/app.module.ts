import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlayerSuggestionsCommentsComponent } from './player-suggestions-comments/player-suggestions-comments.component';
import { RandomComponent } from './random/random.component';
import { ThePlayerComponent } from './the-player/the-player.component';
import { TheSearchComponent } from './the-search/the-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlayerSuggestionsCommentsComponent,
    RandomComponent,
    ThePlayerComponent,
    TheSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
