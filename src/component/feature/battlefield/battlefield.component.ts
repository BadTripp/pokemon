import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Moves } from 'src/app/Interface/Moves';
import { UtilsService } from 'src/component/service/utils.service';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css']
})
export class BattlefieldComponent implements OnInit {



  //             BATTLE DATA  
  //      PLAYER 1 
  usernamePlayer1 = "";
  movesPlayer1 : Moves [] = [];
  img_Pokemon_Player1 = "https://static-it.gamestop.it/images/products/298073/3max.jpg";
  //      PLAYER 2
  usernamePlayer2 = "";
  movesPlayer2 : Moves [] = [];
  img_Pokemon_Player2 = "https://static-it.gamestop.it/images/products/298073/3max.jpg";
  // TURN / TEXT 
  turn=1;   
  turnText="Player1";

  constructor(
    private srv: UtilsService,
    private route:Router
    ) {
      // IMPORT OBJ PLAYER 1 AND 2 FROM PLAY COMPONENT
      let nav : Navigation | any = this.route.getCurrentNavigation();

      
      // GET AND SET PLAYER DATA
      if(nav.extras && nav.extras.state && nav.extras.state['players']){
        
        
        this.usernamePlayer1=nav.extras.state['players'].name;
        this.movesPlayer1=nav.extras.state['players'].pokemon[0].moves;
        this.img_Pokemon_Player1=nav.extras.state['players'].pokemon[0].img;
        
      }

      if(nav.extras && nav.extras.state && nav.extras.state['players']){
        
        this.usernamePlayer2=nav.extras.state['players'].nameOpp;
        this.movesPlayer2=nav.extras.state['players'].pokemonOpp[0].moves;
        this.img_Pokemon_Player2=nav.extras.state['players'].pokemonOpp[0].img;
        
      }
     

   }
   



  
  pokemon$: Observable<any> = this.srv.getAllPokemon();
  pokemon={};

  ngOnInit(): void {


    

    this.pokemon$.subscribe((p) => {
      this.pokemon=p;
    });
  }

}
