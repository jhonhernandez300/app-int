import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { PlayerSuggestionsCommentsComponent } from './player-suggestions-comments/player-suggestions-comments.component';
import { TheSearchComponent } from './the-search/the-search.component';

const routes: Routes = [
  { path: 'random', component: RandomComponent }, 
  { path: 'component-suggestions-comments', component: PlayerSuggestionsCommentsComponent },
  { path: 'the-search/:id', component: TheSearchComponent },
  { path: '', component: RandomComponent }, 
  { path: '**', component: RandomComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
