import { Moves } from "./Moves";

export interface Pokemon {
    
    name : String ;
    type : String ;
    description : String;
    img : String;
    moves : Moves[];

    level : number;
    attack : number ;
    special_attack : number ;
    defense : number ;
    special_defense : number ;
    speed : number ;
    health : number ;


}
