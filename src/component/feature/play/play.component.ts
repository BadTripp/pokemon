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

  player: Player = PLAYER;
  pokemonList$: Observable<any> = this.srv.getAllPokemon();
  pokemonList: Pokemon[] = [];
  checkoutForm = this.formBuilder.group({
    username: '',
    pokemon1: POKEMON,
    pokemon2: POKEMON,
    pokemon3: POKEMON
  });
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

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    this.player.name=this.checkoutForm.value.username!;
    this.player.health=this.checkoutForm.value.pokemon1?.health!;
    this.player.pokemon=[this.checkoutForm.value.pokemon1!];
    this.player.pokemon.push(this.checkoutForm.value.pokemon2!);
    this.player.pokemon.push(this.checkoutForm.value.pokemon3!);
    console.warn('Your order has been submitted', this.player);

    this.checkoutForm.reset();
  }
}
