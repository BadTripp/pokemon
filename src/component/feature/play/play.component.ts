import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { MOVE, Moves } from 'src/app/Interface/Moves';
import { PLAYER, Player } from 'src/app/Interface/Player';
import { POKEMON, Pokemon } from 'src/app/Interface/Pokemon';
import { UtilsService } from 'src/component/service/utils.service';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  player1: Player = PLAYER;
  player2: Player = PLAYER;
  pokemonList$: Observable<any> = this.srv.getAllPokemon();
  pokemonList: Pokemon[] = [];
  player1Form = this.formBuilder.group({
    username: '',
    pokemon1: POKEMON,
    pokemon2: POKEMON,
    pokemon3: POKEMON
  });
  player2Form = this.formBuilder.group({
    username: '',
    pokemon1: POKEMON,
    pokemon2: POKEMON,
    pokemon3: POKEMON
  });
  player1ready = false;
  player2ready = false;
  constructor(
    private srv:UtilsService,    
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.pokemonList$.subscribe((m) => {
      this.pokemonList= m;
    });
    console.log(this.pokemonList);
  }

  onSubmit1(): void {
    let c= this.player1Form.value.pokemon1!= POKEMON && this.player1Form.value.pokemon2!= POKEMON && this.player1Form.value.pokemon3!= POKEMON;
    if(this.player1Form.valid && c){
      this.player1.name=this.player1Form.value.username!;
      this.player1.health=this.player1Form.value.pokemon1?.health!;
      this.player1.pokemon=[this.player1Form.value.pokemon1!];
      this.player1.pokemon.push(this.player1Form.value.pokemon2!);
      this.player1.pokemon.push(this.player1Form.value.pokemon3!);
      console.log('Your order has been submitted', this.player1); 
      this.player1ready = true;
    }
  }

  onSubmit2(){
    let c= this.player2Form.value.pokemon1!= POKEMON && this.player2Form.value.pokemon2!= POKEMON && this.player2Form.value.pokemon3!= POKEMON;
    if(this.player2Form.valid && c){
      this.player2.name=this.player2Form.value.username!;
      this.player2.health=this.player2Form.value.pokemon1?.health!;
      this.player2.pokemon=[this.player2Form.value.pokemon1!];
      this.player2.pokemon.push(this.player2Form.value.pokemon2!);
      this.player2.pokemon.push(this.player2Form.value.pokemon3!);
      console.log('Your order has been submitted', this.player2); 
      this.player2ready = true;
    }
  }

  goBattle(){
    console.log('routing in battlefield', this.player1, this.player2); 
    //routing in battlefield
  }
}
