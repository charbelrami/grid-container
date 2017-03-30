customElements.define(
  'grid-container',
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `<style>
        :host {
          display: grid;
          grid-auto-rows: 1fr;
          grid-auto-columns: 1fr;
        }
        :host([grid]) {
          grid: var(--grid);
        }
        :host([areas]) {
          grid-template-areas: var(--areas);
        }
        :host([gutter]) {
          grid-gap: var(--gutter, 10px);
        }
        </style>
        <slot></slot>`;
    }

    static get observedAttributes() {
      return ['gutter', 'areas', 'grid'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      this.style.setProperty(`--${name}`, newVal);
    }
  }
);

customElements.define(
  'grid-item',
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `<style>
        :host([area]) {
          grid-area: var(--area);
        }
        :host([row]) {
          grid-row: var(--row);
        }
        :host([column]) {
          grid-column: var(--column);
        }
        </style>
        <slot></slot>`;
    }

    static get observedAttributes() {
      return ['area', 'row', 'column'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
      this.style.setProperty(`--${name}`, newVal);
    }
  }
);
