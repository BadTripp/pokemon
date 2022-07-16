import { Component, Directive, EventEmitter, OnInit, QueryList, ViewChild } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { max, Observable } from 'rxjs';
import { MOVE, Moves } from 'src/app/Interface/Moves';
import { POKEMON, Pokemon } from 'src/app/Interface/Pokemon';
import { UtilsService } from 'src/component/service/utils.service';
import { MoveChoiserComponent } from 'src/component/share/move-choiser/move-choiser.component';
import { elabora } from 'src/component/share/utils-functions';


@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css'],

})
export class BattlefieldComponent implements OnInit {
  @ViewChild("player1Moves") private player1Moves!: MoveChoiserComponent;
  @ViewChild("player2Moves") private player2Moves!: MoveChoiserComponent;

  pokeballClose = "/assets/pokeball.png";
  pokeballOpen = "/assets/pokeball_open.png";



  //             BATTLE DATA  
  //      PLAYER 1 
  healthP1 = 100;

  usernamePlayer1 = "";
  maxhealth_Player1 = 0;




  pokemon_Active_Player1: Pokemon = POKEMON;
  pokemon_Active_id1 : number = 0;

  movesPlayer1: Moves[] = this.pokemon_Active_Player1.moves;
  img_Pokemon_Player1 = this.pokemon_Active_Player1.img;

  pokemon_Player1: Pokemon[] = [];
  

  //      PLAYER 2
  healthP2 = 100;

  usernamePlayer2 = "";
  maxhealth_Player2 = 0;

  pokemon_Active_Player2: Pokemon = POKEMON;
  pokemon_Active_id2 : number = 0;

  movesPlayer2: Moves[] = this.pokemon_Active_Player2.moves;
  img_Pokemon_Player2 = this.pokemon_Active_Player2.img;

  pokemon_Player2: Pokemon[] = [];
 

  // TURN / TEXT 
  turn = 1;
  turnText = "Player1";

  


  constructor(
    private srv: UtilsService,
    private route: Router,
  ) {
    // IMPORT OBJ PLAYER 1 AND 2 FROM PLAY COMPONENT
    let nav: Navigation | any = this.route.getCurrentNavigation();


    // GET AND SET PLAYER DATA
    if (nav.extras && nav.extras.state && nav.extras.state['players']) {


      this.usernamePlayer1 = nav.extras.state['players'].name;
      this.pokemon_Active_Player1 = nav.extras.state["players"].pokemon[0];

      this.movesPlayer1 = this.pokemon_Active_Player1.moves;
      this.img_Pokemon_Player1 = this.pokemon_Active_Player1.img;
      this.maxhealth_Player1 = this.pokemon_Active_Player1.health;

      this.pokemon_Player1 = nav.extras.state["players"].pokemon;
      
<<<<<<< Updated upstream
      // GET AND SET PLAYER DATA
      if(nav.extras && nav.extras.state && nav.extras.state['players']){
        
        
        this.usernamePlayer1=nav.extras.state['players'].name;
        this.movesPlayer1=nav.extras.state['players'].pokemon[0].moves;
        console.log(this.movesPlayer1=nav.extras.state['players'].pokemon[0].moves);
        this.img_Pokemon_Player1=nav.extras.state['players'].pokemon[0].img;
        
      }
=======
>>>>>>> Stashed changes

    }

    if (nav.extras && nav.extras.state && nav.extras.state['players']) {

      this.usernamePlayer2 = nav.extras.state['players'].nameOpp;
      this.pokemon_Active_Player2 = nav.extras.state["players"].pokemonOpp[0];

      this.movesPlayer2 = this.pokemon_Active_Player2.moves;
      this.img_Pokemon_Player2 = this.pokemon_Active_Player2.img;
      this.maxhealth_Player2 = this.pokemon_Active_Player2.health;

      this.pokemon_Player2 = nav.extras.state["players"].pokemonOpp;
    }

    console.log(this.pokemon_Active_Player1.health);
  }





  pokemon$: Observable<any> = this.srv.getAllPokemon();
  pokemon = {};


  ngOnInit(): void {




    this.pokemon$.subscribe((p) => {
      this.pokemon = p;
    });
  }




  selectedMove1_Check: boolean = false;
  selectedMove2_Check: boolean = false;
  selectedMove1: Moves = MOVE;
  selectedMove2: Moves = MOVE;



  resetMovesButton = ()=>{
    this.player1Moves.reset_Button();
    this.player2Moves.reset_Button();
  }

 

  health_Calculator = (maxhealth: number, health: number) => {
    let calc = (health / maxhealth) * 100;

    return Math.round(calc);
  }


  on_SelectMove_Player1 = (e: Moves) => {
    this.selectedMove1_Check = true;

    this.selectedMove1 = e;
    this.TurnStart();
  }
  on_SelectMove_Player2 = (e: Moves) => {
    this.selectedMove2_Check = true;

    this.selectedMove2 = e;
    this.TurnStart();
  }

  TurnStart = () => {

    let poke: Pokemon[] = [];

    if (this.selectedMove1_Check && this.selectedMove2_Check) {
      console.log("turno")
      this.selectedMove1_Check = false;
      this.selectedMove2_Check = false;

      poke = elabora(this.pokemon_Active_Player1, this.pokemon_Active_Player2, this.selectedMove1, this.selectedMove2)
      console.log(this.pokemon_Active_Player1.health)

      const h1 = setInterval(()=>{
        (this.healthP1 == this.health_Calculator(this.maxhealth_Player1, poke[0].health)? clearInterval(h1):"")
        this.healthP1-=1;
            
        },100)
        const h2 = setInterval(()=>{
          (this.healthP2 == this.health_Calculator(this.maxhealth_Player2, poke[0].health)? clearInterval(h2):"")
          this.healthP2-=1;
              
          },100)
     

      
      if(this.healthP1 == 0 || this.healthP1 < 0){
        console.log("Dentro 1  ");
        if(this.pokemon_Active_id1 == 2 ){ console.log("Finish win player 2 ")}
          this.pokemon_Active_Player1=this.pokemon_Player1[this.pokemon_Active_id1+1];
          this.pokemon_Active_id1+=1
          this.img_Pokemon_Player1 = this.pokemon_Active_Player1.img;
          this.movesPlayer1 = this.pokemon_Active_Player1.moves;
          this.maxhealth_Player1 = this.pokemon_Active_Player1.health;
          this.healthP1 = 100;

            // next pokemon 
            //health reset 
      }
      if(this.healthP2 == 0 || this.healthP2 < 0){
        console.log("Dentro 1  ");
        if(this.pokemon_Active_id2 == 2 ){ console.log("Finish win player 1 ")}
        this.pokemon_Active_Player2=this.pokemon_Player2[this.pokemon_Active_id2+1];

          this.pokemon_Active_id2+=1
          this.img_Pokemon_Player2 = this.pokemon_Active_Player2.img;
          this.movesPlayer2 = this.pokemon_Active_Player2.moves;
          this.maxhealth_Player2 = this.pokemon_Active_Player2.health;
          this.healthP2 = 100;

        // next pokemon 
        //health reset 
      }
      setTimeout(() => {
        this.resetMovesButton();
      }, 1000);


    }



  }



}
