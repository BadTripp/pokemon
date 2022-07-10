import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
  player: any;
  exportPlayer1: Player[] = [];
  pokemonList$: Observable<any> = this.srv.getAllPokemon();
  pokemonList: Pokemon[] = [];
  player1Form = this.formBuilder.group({
    username: '',
    pokemon1: POKEMON,
    pokemon2: POKEMON,
    pokemon3: POKEMON,
    usernameOpp: '',
    pokemon1Opp: POKEMON,
    pokemon2Opp: POKEMON,
    pokemon3Opp: POKEMON
  });
  
  ready = false;
  constructor(
    private srv:UtilsService,    
    private formBuilder: FormBuilder,
    private route : Router
    ) { }

  ngOnInit(): void {
    this.pokemonList$.subscribe((m) => {
      this.pokemonList= m;
    });
    console.log(this.pokemonList);
  }

  public onSubmit(): void {
    let c= this.player1Form.value.pokemon1!= POKEMON && this.player1Form.value.pokemon2!= POKEMON && this.player1Form.value.pokemon3!= POKEMON;
    let c2= this.player1Form.value.pokemon1Opp!= POKEMON && this.player1Form.value.pokemon2Opp!= POKEMON && this.player1Form.value.pokemon3Opp!= POKEMON;
    if(this.player1Form.valid && c && c2){
      this.player={
        name: this.player1Form.value.username!,
        health: this.player1Form.value.pokemon1?.health!,
        pokemon: [this.player1Form.value.pokemon1!, this.player1Form.value.pokemon2!, this.player1Form.value.pokemon3!],

        nameOpp: this.player1Form.value.usernameOpp!,
        healthOpp: this.player1Form.value.pokemon1Opp?.health!,
        pokemonOpp: [this.player1Form.value.pokemon1Opp!, this.player1Form.value.pokemon2Opp!, this.player1Form.value.pokemon3Opp!],
      }
      this.ready= true;
  }}

  goBattle(){
    console.log('routing in battlefield', this.player); 
    
    //routing in battlefield
    this.route.navigate(["battlefield"],{state : { players : this.player }} );
  }
}
