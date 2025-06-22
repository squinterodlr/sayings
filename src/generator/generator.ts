import { NOUNS } from "./nouns.js"
import { VERBS } from "./verbs.js"
import { randomInt } from "../utils/random.js"

const nounKeys = Object.keys(NOUNS);
const verbKeys = Object.keys(VERBS)

function randomNoun() {
    return NOUNS[nounKeys[randomInt(nounKeys.length)]];
}

function randomVerb() {
    return VERBS[verbKeys[randomInt(verbKeys.length)]];
}

export class SayingGenerator {

    generate(): string {
        
        const subject = NOUNS["mathematics"];
        const object = randomNoun();
        const verb = VERBS["be"]
        return `${subject.indefiniteArticle} ${subject.base} ${verb.conjugate()} ${object.indefiniteArticle} ${object.base}`

    }
}