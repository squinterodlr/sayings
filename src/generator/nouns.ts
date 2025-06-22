enum PluralType {
    Same = "same",
    S = "s",
    ES = "es",
    None = ""
}

enum ArticleType {
    A = "a",
    An = "an",
    None = ""
}

/**
 * A noun. This class included how to pluralize it and which indefinite article to use (if any).
 */
class Noun {
    base: string;
    plural: PluralType | string;
    article: ArticleType;
    constructor (
        base: string,
        plural: PluralType | string = PluralType.S,
        article?: ArticleType,
    ) {

        this.base = base;
        this.plural = plural;
        if (!article) {

            if (["a", "e", "i", "o", "u"].includes(base[0])) {
                this.article = ArticleType.An;
            }
            else {
                this.article = ArticleType.A;
            }
        }
        else {
            this.article = article;
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
    new Noun("heaven"),
    new Noun("hell"),

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
    new Noun("mathematics", PluralType.None, ArticleType.None),
    new Noun("philosophy", "philosophies"),
    new Noun("progress", PluralType.None, ArticleType.None),


]