import { Moves } from 'src/app/Interface/Moves';
import { Pokemon } from 'src/app/Interface/Pokemon';

export function elaboraTurno(pokemon1: Pokemon, pokemon2: Pokemon, move1: Moves, move2:Moves){
    let damage=0;
    let damageOpp=0;
    let typeBonus= pokemon1.type === move1.type ? 1.25 : 1;
    let typeBonusOpp= pokemon2.type === move2.type ? 1.25 : 1;
    //let typeEffectivness=mossa == lista debolezze ? 0.50 : lista efficacia ? 1.50 : 1 ;
    damage= pokemon1.attack + (move1.power * typeBonus) - pokemon2.defense;
    damageOpp= pokemon2.attack + (move2.power * typeBonus) - pokemon1.defense;
    pokemon1.health-= damageOpp;
    pokemon2.health-= damage;
    return [pokemon1, pokemon2];
};

export function elabora(pokemon1: Pokemon, pokemon2: Pokemon, move1: Moves, move2:Moves){
    if(pokemon1.speed>pokemon2.speed){
        elaboraTurno(pokemon1, pokemon2, move1, move2);
    } else if(pokemon2.speed>pokemon1.speed){
        elaboraTurno(pokemon2, pokemon1, move2, move1);
    } else {
        if(Math.random()==0){
            elaboraTurno(pokemon1, pokemon2, move1, move2);
        } else {
            elaboraTurno(pokemon2, pokemon1, move2, move1);
        }
    }
};