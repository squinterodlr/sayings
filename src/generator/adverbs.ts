import { bernoulli, randomInt } from "../utils/random.js"
export const FREQUENCY : string[] = [
    "never",
    "seldom",
    "rarely",
    "occasionally",
    "sometimes",
    "normally",
    "often",
    "typically",
    "usually",
    "always",
]

export function randomFrequencyAdverb(noAdverbProbability: number = 0.5): string | null {
    if (bernoulli(noAdverbProbability)) {
        return null;
    }
    else {
        return FREQUENCY[randomInt(FREQUENCY.length)]
    }
}