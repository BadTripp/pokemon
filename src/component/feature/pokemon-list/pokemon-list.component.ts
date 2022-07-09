import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/Interface/Pokemon';
import { UtilsService } from 'src/component/service/utils.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  

  constructor(private srv:UtilsService) { }

  pokemonList$: Observable<any> = this.srv.getAllPokemon();
  pokemonList : Pokemon[] = [];
  

  ngOnInit(): void {
    this.pokemonList$.subscribe((p) => {
      this.pokemonList= p;
    });
  }

}
