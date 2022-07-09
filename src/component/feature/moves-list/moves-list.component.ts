import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/component/service/utils.service';
import { Moves } from '../../../app/Interface/Moves';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.css']
})
export class MovesListComponent implements OnInit {

  
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
