import { POKEMON, Pokemon } from "./Pokemon";

export interface Player { 
    name: string;
    pokemon: Pokemon[];
    health: number;
    wins: number
}

export const PLAYER: Player = {
    name: "",
    pokemon: [POKEMON],
    health: 0,
    wins: 0,
}