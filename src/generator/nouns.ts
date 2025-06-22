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

        if (!indefiniteArticle) {

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


export const NOUNS: Noun[] = [
    
    new Noun("man", "men"),
    new Noun("woman", "women"),
    new Noun("person", "people"),
    new Noun("human"),
    new Noun("child", "children"),
    new Noun("boy"),
    new Noun("girl"),

    new Noun("world"),
    new Noun("heaven", PluralType.S, IndefiniteArticle.None),
    new Noun("hell", PluralType.S, IndefiniteArticle.None),

    new Noun("ally", "allies"),
    new Noun("enemy", "enemies"),

    new Noun("master"),
    new Noun("pupil"),

    new Noun("life", "lives"),
    new Noun("freedom"),
    new Noun("thirst", PluralType.None),
    new Noun("success", PluralType.ES),
    new Noun("failure"),
    new Noun("win"),
    new Noun("loss", PluralType.ES),

    new Noun("science"),
    new Noun("art"),
    new Noun("mathematics", PluralType.None, IndefiniteArticle.None),
    new Noun("philosophy", "philosophies"),
    new Noun("progress", PluralType.None, IndefiniteArticle.None),


]