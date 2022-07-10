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
  @Input() disabled!:  boolean;
  @Output() clickedMove = new EventEmitter<Moves>();

  constructor(private srv: UtilsService) {

   
   }

  ngOnInit(): void {
    
  }

  onClickMove(move : Moves) {
    this.clickedMove.emit(move);
  }

}
