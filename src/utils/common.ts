export function selectElement(selector: string): HTMLElement | null {
    if (selector.startsWith('#')) {
        return document.getElementById(selector.slice(1));
    } else if (selector.startsWith('.')) {
        return document.querySelector(selector);
    } else {
        return document.querySelector(selector);
    }
}

export function bindEvent(id: string, handler: () => void): void {
    document.getElementById(id)?.addEventListener('click', handler);
}