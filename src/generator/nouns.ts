enum PluralType {
    Same = "same",
    S = "s",
    ES = "es",
    None = ""
}

enum IndefiniteArticle {
    A = "a",
    An = "an",
    None = ""
}

enum DefiniteArticle {
    The = "the",
    None = ""
}

/**
 * A noun. This class included how to pluralize it and which indefinite article to use (if any).
 */
class Noun {
    base: string;
    plural: PluralType | string;
    indefiniteArticle: IndefiniteArticle;
    definiteArticle: DefiniteArticle;
    constructor (
        base: string,
        plural: PluralType | string = PluralType.S,
        indefiniteArticle?: IndefiniteArticle,
        definiteArticle: DefiniteArticle = DefiniteArticle.The,
    ) {

        this.base = base;
        this.plural = plural;
        this.definiteArticle = definiteArticle;

        if (indefiniteArticle === undefined) {

            if (["a", "e", "i", "o", "u"].includes(base[0])) {
                this.indefiniteArticle = IndefiniteArticle.An;
            }
            else {
                this.indefiniteArticle = IndefiniteArticle.A;
            }
        }
        else {
            this.indefiniteArticle = indefiniteArticle;
        }
    }

    /**
     * Returns the correctly pluralized noun.
     * @returns pluralized noun
     */
    getPluralized (): string {

        switch (this.plural) {
            case PluralType.None:
                return this.base;
            case PluralType.S:
                return this.base + "s";
            case PluralType.ES:
                return this.base + "es";
            default:
                return this.plural as string;
        }
    }

}


export const NOUNS: Record<string, Noun> = {
    
    "man": new Noun("man", "men"),
    "woman": new Noun("woman", "women"),
    "person": new Noun("person", "people"),
    "human": new Noun("human"),
    "child": new Noun("child", "children"),
    "boy": new Noun("boy"),
    "girl": new Noun("girl"),

    "world": new Noun("world"),
    "heaven": new Noun("heaven", PluralType.S, IndefiniteArticle.None, DefiniteArticle.None),
    "hell": new Noun("hell", PluralType.S, IndefiniteArticle.None, DefiniteArticle.None),
    "home": new Noun("home", PluralType.S, IndefiniteArticle.A, DefiniteArticle.None),
    "prison": new Noun("prison"),

    "ally": new Noun("ally", "allies"),
    "enemy": new Noun("enemy", "enemies"),

    "master": new Noun("master"),
    "pupil": new Noun("pupil"),

    "life": new Noun("life", "lives"),
    "freedom": new Noun("freedom"),
    "thirst": new Noun("thirst", PluralType.None),
    "success": new Noun("success", PluralType.ES),
    "failure": new Noun("failure"),
    "win": new Noun("win"),
    "loss": new Noun("loss", PluralType.ES),

    "science": new Noun("science"),
    "art": new Noun("art"),
    "mathematics": new Noun("mathematics", PluralType.None, IndefiniteArticle.None),
    "philosophy": new Noun("philosophy", "philosophies"),
    "progress": new Noun("progress", PluralType.None, IndefiniteArticle.None),

    "water": new Noun("water", PluralType.S, IndefiniteArticle.None),
    "air": new Noun("air", PluralType.S, IndefiniteArticle.None),
    "earth": new Noun("earth", PluralType.None, IndefiniteArticle.None),
    "fire": new Noun("fire")
}