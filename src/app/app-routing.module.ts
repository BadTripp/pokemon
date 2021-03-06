import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from '../component/feature/pokemon-list/pokemon-list.component';
import { PlayComponent } from '../component/feature/play/play.component';
import { MovesListComponent } from '../component/feature/moves-list/moves-list.component';
import { BattlefieldComponent } from 'src/component/feature/battlefield/battlefield.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pokemonlist', component: PokemonListComponent },
  { path: 'play', component: PlayComponent },
  { path: 'moveslist', component: MovesListComponent },
  { path: 'battlefield', component: BattlefieldComponent },
  { path: 'admin', component: AdminPanelComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
