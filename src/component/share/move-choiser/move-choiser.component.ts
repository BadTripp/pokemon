import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Moves } from 'src/app/Interface/Moves';
import { UtilsService } from 'src/component/service/utils.service';

@Component({
  selector: 'app-move-choiser',
  templateUrl: './move-choiser.component.html',
  styleUrls: ['./move-choiser.component.css']
})
export class MoveChoiserComponent implements OnInit {

  

  @Input() movesList!: Moves[];
  
<<<<<<< Updated upstream
  @Output() clickedMove = new EventEmitter<Moves>();

  constructor(private srv: UtilsService) {
    
=======
  @Input() disabled!:  boolean;


  @Output() clickedMove = new EventEmitter<Moves>();
  p : boolean[] = [];
  
  constructor(private srv: UtilsService) {
    // ALL BUTTON SET TO ACTIVATED   
    this.reset_Button();
>>>>>>> Stashed changes
   
   }

  ngOnInit(): void {

   
    
  }

  reset_Button=()=>{
    for(let i = 0 ; i <= 3 ; i++){
      this.p[i] = true;
      
    }
  }

  move_Selected =(i : number)=>{
    this.p[i]=!this.p[i];
    
  }
 

  onClickMove=(move : Moves)=> {
    console.log(this.movesList);
    this.clickedMove.emit(move);
  }

}
