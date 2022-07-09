import { MOVE, Moves } from "./Moves";

export interface Player { 
    name: string;
    moves: Moves[];
    health: number;
    wins: number
}

export const PLAYER: Player = {
    name: "",
    moves: [MOVE, MOVE, MOVE, MOVE],
    health: 0,
    wins: 0,
}