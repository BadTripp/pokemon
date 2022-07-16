import { formatCurrency } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { UtilsService } from 'src/component/service/utils.service';
import { MOVE, Moves } from '../Interface/Moves';
import { Pokemon, POKEMON } from '../Interface/Pokemon';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  move1 : Moves = MOVE;
  move2 : Moves = MOVE;
  move3 : Moves = MOVE;
  move4 : Moves = MOVE;

  poke : Pokemon = POKEMON;
  constructor(
    private form:FormBuilder,
    private srv :UtilsService,
    ) {
      
      this.movesList$.subscribe((m) => {
        this.movesList= m;
      });
      console.log(this.movesList)
     }
  
     
  movesList$: Observable<any> = this.srv.getAllMoves();
  movesList: Moves[] = []         

  pokemonForm = this.form.group({
    name:["",Validators.required],
    level:["",Validators.required],
    attack:["",Validators.required],
    defense:["",Validators.required],
    description:["",Validators.required],
    type:["",Validators.required],
    special_attack:["",Validators.required],
    special_defense:["",Validators.required],
    speed:["",Validators.required],
    health:["",Validators.required],

    img:["",Validators.required],

    moves :  this.form.group({  
      move1:[MOVE,Validators.required],
      move2:[MOVE,Validators.required],
      move3:[MOVE,Validators.required],
      move4:[MOVE,Validators.required],
    })
  })


  ngOnInit(): void {
  }

  onSubmit=()=>{
    console.warn(this.pokemonForm.value)
    console.log(this.pokemonForm.value.moves?.move1!)
   
    // this.poke.name = this.pokemonForm.get("name")!;
    this.poke.name = this.pokemonForm.value.name!;
    
    this.poke.level = parseInt(this.pokemonForm.value.level!);
    this.poke.attack = parseInt(this.pokemonForm.value.attack!);
    this.poke.defense = parseInt(this.pokemonForm.value.defense!);
    this.poke.description = this.pokemonForm.value.description!;
    this.poke.type = this.pokemonForm.value.type!;
    this.poke.special_attack = parseInt(this.pokemonForm.value.special_attack!);
    this.poke.special_defense = parseInt(this.pokemonForm.value.special_defense!);
    this.poke.speed = parseInt(this.pokemonForm.value.speed!);
    this.poke.health = parseInt(this.pokemonForm.value.health!);
    this.poke.img = this.pokemonForm.value.img!;
    // this.poke.moves[0] = this.move1;
    // this.poke.moves[1] = this.move2;
    // this.poke.moves[2] = this.move3;
    // this.poke.moves[3] = this.move4;
    
    
    
    
    
    console.log(this.move1)
    console.log(this.pokemonForm.value.moves);
    console.log(this.poke); 
    
    
    
    this.srv.
    createPokemon(this.poke)
    .subscribe(e => {});
         
    
  }

}
