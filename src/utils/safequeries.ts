export function safeGetElementById(id: string): HTMLElement {
    const element = document.getElementById(id);

    if (!element) {
        throw new Error(`Could not find element with id: ${id}.`);
    }

    return element;
}

export function safeQuerySelector(query: string): Element {
    const element = document.querySelector(query)
    if (!element) {
        throw new Error(`Could not find element from query: ${query}.`);
    }
    return element;
}