const Colors = {
    white: '#fff',
    offWhite: '#f1f1f1',
    grayLight: '#e6e6e6',
    gray: '#222',
    grayDark: '#454545',
    red: '#e21833',
    redDark: '#951022',
    yellow: '#FFD200',
    green: '#70ebd6',
};
const Breakpoints = {
    smallMobileMax: 479,
    mediumMobileMin: 480,
    socialIconsTransitionPoint: 700,
    largeMobileMax: 767,
    tabletMin: 768,
    tabletMax: 1023,
    desktopMin: 1024,
};
const SourceSans = `Source Sans,Source Sans Pro,sans-serif`;
const ELEMENT_NAME = 'umd-map';
const template = document.createElement('template');
template.innerHTML = `
  <style>
  
 

  </style>
`;
export default class UmdMap extends HTMLElement {
    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: 'open' });
        this._shadow.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return ['map-style'];
    }
    attributeChangedCallback(name, oldValue, newValue) { }
    connectedCallback() { }
}
if (!window.customElements.get(ELEMENT_NAME)) {
    window.UmdMap = UmdMap;
    window.customElements.define(ELEMENT_NAME, UmdMap);
}
//# sourceMappingURL=index.js.map