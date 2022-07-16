import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Moves } from 'src/app/Interface/Moves';
import { UtilsService } from 'src/component/service/utils.service';

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
    
  }
  

}
