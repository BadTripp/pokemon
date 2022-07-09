import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MOVE, Moves } from 'src/app/Interface/Moves';
import { PLAYER, Player } from 'src/app/Interface/Player';
import { Pokemon } from 'src/app/Interface/Pokemon';
import { UtilsService } from 'src/component/service/utils.service';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  player: Player = PLAYER;
  pokemonList$: Observable<any> = this.srv.getAllPokemon();
  pokemonList: Pokemon[] = [];

  constructor(private srv:UtilsService) { }

  ngOnInit(): void {
    this.pokemonList$.subscribe((m) => {
      this.pokemonList= m;
    });
    console.log(this.pokemonList);
  }

}
