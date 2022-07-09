import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MOVE, Moves } from 'src/app/Interface/Moves';
import { PLAYER, Player } from 'src/app/Interface/Player';
import { UtilsService } from 'src/component/service/utils.service';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  player: Player = PLAYER;
  movesList$: Observable<any> = this.srv.getAllMoves();
  movesList: Moves[] = []
  constructor(private srv:UtilsService) { }

  ngOnInit(): void {
    this.movesList$.subscribe((m) => {
      this.movesList= m;
    });
    console.log(this.movesList)
  }

}
