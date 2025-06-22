import { NOUNS } from "./nouns.js"
import { randomQuantifier } from "./quantifiers.js";
import { VERBS, ConjugationForm } from "./verbs.js"
import { randomModal } from "./modals.js";
import { randomFrequencyAdverb } from "./adverbs.js";
import { randomInt, bernoulli, randomEnumItem } from "../utils/random.js"
import { capitalize } from "../utils/stringutils.js";

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
        return this.#generateXisY();
    }
    #generateXisY(): string {
        
        const subjectNoun = randomNoun();
        const objectNoun = randomNoun();
        const baseVerb = VERBS["be"];

        const isDefinite = bernoulli();
        let isPlural: boolean;

        let subject: string;
        const quantifier = isDefinite? null : randomQuantifier();
        if (quantifier === null) {
            isPlural = bernoulli();
            subject = subjectNoun.withArticle(isDefinite, isPlural);
        }
        else {
            isPlural = quantifier.needsPlural;
            subject = subjectNoun.withQuantifier(quantifier);
        }
        
        let conjugationForm = isPlural? ConjugationForm.Plural : ConjugationForm.ThirdPersonSingular;

        const modal = randomModal();
        conjugationForm = modal === null ? conjugationForm : ConjugationForm.Base;

        let verb = baseVerb.conjugate(conjugationForm);
        const adverb = randomFrequencyAdverb();

        if (modal === null) {
            verb = (adverb === null) ? verb : verb + " " + adverb;
        }
        else {
            verb = (adverb === null) ? modal + " " + verb : modal + " " + adverb + " " + verb;
        }
       
        return `${capitalize(subject)} ${verb} ${objectNoun.indefiniteArticle} ${objectNoun.base}.`;
    }

    
}