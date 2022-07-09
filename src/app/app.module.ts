import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BattlefieldComponent } from '../component/feature/battlefield/battlefield.component';
import { UtilsService } from '../component/service/utils.service';
import { MoveChoiserComponent } from 'src/component/share/move-choiser/move-choiser.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from '../component/feature/pokemon-list/pokemon-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../component/share/navbar/navbar.component';
import { PlayComponent } from '../component/feature/play/play.component';
import { MovesListComponent } from '../component/feature/moves-list/moves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BattlefieldComponent,
    NavbarComponent,
    PokemonListComponent,
    HomeComponent,
    PlayComponent,
    MovesListComponent,
    MoveChoiserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
