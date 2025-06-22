/**
 * Returns a random integer between 0 and max, max not included.
 * @param max The maximum (non-inclusive) integer that can be returned.
 * @returns A random integer between 0 (inclusive) and max (non-inclusive)
 */
export function randomInt(max: number) {
    return Math.floor(Math.random() * max);
}

/**
 * Returns true or false with given probability.
 * @param probability The probability of returning true. Default is 0.5.
 * @returns True or false
 */
export function bernoulli(probability: number = 0.5): boolean {
    return Math.random() < probability;
}

export function randomEnumItem<T extends Record<string | number, string | number>>(enumName: T): string | number {
    const enumKeys = Object.keys(enumName).filter( k => isNaN(Number(k)));
    const key = enumKeys[randomInt(enumKeys.length)];
    return enumName[key];
}