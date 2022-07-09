import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private port = '8080';
  private url = 'http://192.168.1.22:'+this.port;

  constructor(private httpClient: HttpClient) { }
  
  getPokemon(pokemonId: string){
    return this.httpClient.post(this.url + "/findPokemon?name=" + pokemonId, {});
  }
  
  getAll(){
    return this.httpClient.post(this.url + "/getallpokemon", {});
  }
}
