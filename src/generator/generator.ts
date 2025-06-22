import { NOUNS } from "./nouns.js"
import { randomInt } from "../utils/random.js"
export class SayingGenerator {

    generate(): string {
        
        const subject = NOUNS[randomInt(NOUNS.length)]
        const object = NOUNS[randomInt(NOUNS.length)]

        return `${subject.indefiniteArticle} ${subject.base}`

    }
}