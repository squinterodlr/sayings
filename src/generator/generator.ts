export class SayingGenerator {

    generate(): string {
        const coinFlip = Math.random()
        if (coinFlip < 0.5) {
            return "A man must not be a fish."
        } else {
            return "Sometimes one is fast."
        }
    }
}