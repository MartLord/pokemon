import { Pokemon } from "./pokemon";
import * as coefficientCalculator from "./cof";

const pokemon1 = new Pokemon("fire", 5, 2);
const pokemon2 = new Pokemon("grass", 4, 4);
const damage = (heroType, opponentType, attackPower, opponentDefence) => {
    let coeff = coefficientCalculator.calculateCoef(heroType, opponentType);
    return 50 * (attackPower / opponentDefence) * coeff;
}

console.log(damage(pokemon1.type, pokemon2.type, pokemon1.attack, pokemon2.defence));