declare global {
    interface Window {
        UmdMap: typeof UmdMap;
    }
}
export default class UmdMap extends HTMLElement {
    _shadow: ShadowRoot;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    connectedCallback(): void;
}
//# sourceMappingURL=index.d.ts.map