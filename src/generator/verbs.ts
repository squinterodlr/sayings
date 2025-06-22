enum ThirdPersonSingularForm {
    S= "s",
    Es = "es",
    Ies = "ies",
    Defective = "",
}

enum FirstPersonSingularForm {
    Base,
    Defective
}

enum PluralVerbForm {
    Base,
    Defective
}

export enum ConjugationForm {
    Base,
    Infinitive,
    FirstPersonSingular,
    ThirdPersonSingular,
    Plural
}

class Verb {
    base: string;
    thirdPersonSingular: ThirdPersonSingularForm | string;
    firstPersonSingular: FirstPersonSingularForm | string;
    plural: PluralVerbForm | string; 
    defectiveThirdPersonSingular: boolean;
    defectiveFirstPersonSingular: boolean;
    defectivePlural: boolean;

    constructor (base: string,
                thirdPersonSingular: ThirdPersonSingularForm | string = ThirdPersonSingularForm.S,
                firstPersonSingular: FirstPersonSingularForm | string = FirstPersonSingularForm.Base,
                plural: PluralVerbForm | string = PluralVerbForm.Base) {

        this.base = base;
        this.thirdPersonSingular = thirdPersonSingular;
        this.firstPersonSingular = firstPersonSingular;
        this.plural = plural;

        this.defectiveFirstPersonSingular = firstPersonSingular !== FirstPersonSingularForm.Base;
        this.defectiveThirdPersonSingular = (thirdPersonSingular !== ThirdPersonSingularForm.S ) && (thirdPersonSingular !== ThirdPersonSingularForm.Es ) && (thirdPersonSingular !== ThirdPersonSingularForm.Ies );
        this.defectivePlural = plural !== PluralVerbForm.Base;

    }

    conjugate(form:ConjugationForm = ConjugationForm.ThirdPersonSingular): string {

        switch (form) {
            case ConjugationForm.Base:
                return this.base;
                        
            case ConjugationForm.Infinitive:
                return "to " + this.base;
            
            case ConjugationForm.FirstPersonSingular:
                return this.defectiveFirstPersonSingular ? this.firstPersonSingular as string : this.base;

            case ConjugationForm.ThirdPersonSingular:
                if (this.defectiveThirdPersonSingular) {
                    return this.thirdPersonSingular;
                }
                else if (this.thirdPersonSingular === ThirdPersonSingularForm.Ies) {
                    return this.base.slice(0, -1) + "ies";
                }
                else {
                    return this.base + this.thirdPersonSingular as string;
                }

            case ConjugationForm.Plural :
                return this.defectivePlural? this.plural as string : this.base;
        }

    }

}

export const VERBS : Record<string, Verb>  = {
    "be": new Verb("be", "is", "am", "are"),
    "live": new Verb("live"),
    "die": new Verb("die"),
    "breathe": new Verb("breathe"),
    "run": new Verb("run"),
    "swim": new Verb("swim"),
    "love": new Verb("love"),
    "work": new Verb("work"),
    "listen": new Verb("listen"),
    "touch": new Verb("touch", ThirdPersonSingularForm.Es),
    "save": new Verb("save"),
    "hold": new Verb("hold"),
    "walk": new Verb("walk"),
};