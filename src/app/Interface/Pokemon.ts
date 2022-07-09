import { MOVE, Moves } from "./Moves";

export interface Pokemon {   
    name: String ;
    type: String ;
    description: String;
    img: String;
    moves: Moves[];
    level: number;
    attack: number ;
    special_attack: number ;
    defense: number ;
    special_defense: number ;
    speed: number ;
    health: number ;
}

export const POKEMON: Pokemon = {
    name : "" ,
    type : "" ,
    description : "",
    img : "",
    moves : [MOVE],
    level : 0,
    attack : 0,
    special_attack : 0,
    defense : 0,
    special_defense : 0,
    speed : 0,
    health : 0,
}