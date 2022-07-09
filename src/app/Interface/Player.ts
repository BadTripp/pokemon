import { POKEMON, Pokemon } from "./Pokemon";

export interface Player { 
    name: string;
    moves: Pokemon[];
    health: number;
    wins: number
}

export const PLAYER: Player = {
    name: "",
    moves: [POKEMON],
    health: 0,
    wins: 0,
}