import { randomInt, bernoulli } from "../utils/random.js"

export interface Quantifier {
    name: string,
    needsPlural: boolean
};

export const QUANTIFIERS : Quantifier [] = [
    {name: "every", needsPlural: false},
    {name: "some", needsPlural: true},
    {name: "no", needsPlural: false},
    {name: "all", needsPlural: true}
]

export function randomQuantifier(noQuantifierProbability: number = 0.5): Quantifier | null {
    if (bernoulli(noQuantifierProbability)){
        return null;
    }
    else {
        return QUANTIFIERS[randomInt(QUANTIFIERS.length)];
    }
}