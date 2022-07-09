import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/component/service/utils.service';

@Component({
  selector: 'app-battlefield',
  templateUrl: './battlefield.component.html',
  styleUrls: ['./battlefield.component.css']
})
export class BattlefieldComponent implements OnInit {

  constructor(private srv: UtilsService) { }
  
  pokemon$: Observable<any> = this.srv.getAll();
  pokemon={};

  ngOnInit(): void {
    this.pokemon$.subscribe((p) => {
      this.pokemon=p;
    });
  }

}
