import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Moves } from 'src/app/Interface/Moves';

@Component({
  selector: 'app-move-choiser',
  templateUrl: './move-choiser.component.html',
  styleUrls: ['./move-choiser.component.css']
})
export class MoveChoiserComponent implements OnInit {

  @Input() movesList!: Moves[];
  @Output() clickedMove = new EventEmitter<Moves>();

  constructor() { }

  ngOnInit(): void {
    
  }

  onClickMove(move : Moves) {
    this.clickedMove.emit(move);
  }

}