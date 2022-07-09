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

  

  constructor(private Serv:UtilsService) { }

  pokemonList$: Observable<any> = this.Serv.getAll();
  pokemonList : Pokemon[] = [];
  

  ngOnInit(): void {
    this.pokemonList$.subscribe((p) => {
      
    this.pokemonList= p;
    });
  }

}
