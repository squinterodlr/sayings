import { bernoulli, randomInt } from "../utils/random.js"

export const MODALS : string[] = [
    "can",
    "must",
    "should",
    "shall",
    "will",
]

export function randomModal(noModalProbability: number = 0.5): string | null {

    if (bernoulli(noModalProbability)){
        return null;
    }
    else {
        return MODALS[randomInt(MODALS.length)];
    }

}