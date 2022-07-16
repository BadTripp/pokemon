import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/Interface/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private port = '8080';
  private url = 'http://192.168.1.22:'+this.port;

  constructor(private httpClient: HttpClient) { }
  
  createPokemon(pokemon: Pokemon){
    return this.httpClient.post(this.url + "/createPokemon",{pokemon});
  }

  getPokemon(pokemonId: string){
    return this.httpClient.post(this.url + "/findPokemon?name=" + pokemonId, {});
  }
  
  getAllPokemon(){
    return this.httpClient.post(this.url + "/getallpokemon", {});
  }

  getAllMoves(){
    return this.httpClient.post(this.url + "/getallmoves", {});
  }

 
}
