import { IndefiniteArticle, NOUNS, PluralType } from "./nouns.js"
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

        if (bernoulli()) {
            return this.#generateXisY();
        }
        else if (bernoulli(0.25)){
            return this.#generateXisYisZ();
        }
        else {
            return this.#generateHowCanXbeYWhenZisW();
        }
    }
    #generateXisY(): string {
        
        const subjectNoun = randomNoun();
        const objectNoun = randomNoun();
        const baseVerb = VERBS["be"];

        const isDefinite = (subjectNoun.indefiniteArticle === IndefiniteArticle.None) ? false : bernoulli();
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
        
        isPlural = isPlural && (subjectNoun.plural !== PluralType.None);

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

    #generateXisYisZ() : string {
        const firstNoun = randomNoun().withArticle(false, false);
        const secondNoun = randomNoun().withArticle(false, false);
        const thirdNoun = randomNoun().withArticle(false, false);

        return `${capitalize(firstNoun)} is ${secondNoun} is ${thirdNoun}.`
    }
    
    #generateHowCanXbeYWhenZisW() : string {

        const isPlural = bernoulli(0.25);
        const firstNoun = randomNoun().withArticle(false, isPlural);
        const secondNoun = randomNoun().withArticle(false, isPlural);
        const thirdNoun = randomNoun().withArticle(false, isPlural);
        const fourthNoun = randomNoun().withArticle(false, isPlural);

        const verb = isPlural ? "are" : "is";
        const modal = randomModal(0);
        const question = ["how", "when", "why"][randomInt(3)];
        const connector = ["when", "since", "if", "even though"][randomInt(4)];

        return `${capitalize(question)} ${modal} ${firstNoun} be ${secondNoun} ${connector} ${thirdNoun} ${verb} ${fourthNoun}?`;
    }
}