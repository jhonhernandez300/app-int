import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { PlayerSuggestionsCommentsComponent } from './player-suggestions-comments/player-suggestions-comments.component';
import { TheSearchComponent } from './the-search/the-search.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ThePlayerComponent } from './the-player/the-player.component';

const routes: Routes = [
  { path: 'the-search/:message', component: TheSearchComponent },
  { path: 'random', component: RandomComponent }, 
  { path: 'component-suggestions-comments', component: PlayerSuggestionsCommentsComponent },  
  { path: 'suggestions', component: SuggestionsComponent },
  { path: 'the-player/:id', component: ThePlayerComponent },
  { path: '', component: RandomComponent }, 
  { path: '**', component: RandomComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
