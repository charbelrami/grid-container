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
      return ['gutter', 'areas'];
    }

    get areas() {
      return this.hasAttribute('areas');
    }

    set areas(val) {
      if (val) {
        this.setAttribute('areas', val);
      } else {
        this.removeAttribute('areas');
      }
    }

    get gutter() {
      return this.hasAttribute('gutter');
    }

    set gutter(val) {
      if (val) {
        this.setAttribute('gutter', val);
      } else {
        this.removeAttribute('gutter');
      }
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'gutter') {
        this.style.setProperty('--gutter', newVal);
      }

      if (name === 'areas') {
        this.style.setProperty('--areas', newVal);
      }
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

    get area() {
      return this.hasAttribute('area');
    }

    set area(val) {
      if (val) {
        this.setAttribute('area', val);
      } else {
        this.removeAttribute('area');
      }
    }

    get row() {
      return this.hasAttribute('row');
    }

    set row(val) {
      if (val) {
        this.setAttribute('row', val);
      } else {
        this.removeAttribute('row');
      }
    }

    get column() {
      return this.hasAttribute('column');
    }

    set column(val) {
      if (val) {
        this.setAttribute('column', val);
      } else {
        this.removeAttribute('column');
      }
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'area') {
        this.style.setProperty('--area', newVal);
      }
      if (name === 'row') {
        this.style.setProperty('--row', newVal);
      }
      if (name === 'column') {
        this.style.setProperty('--column', newVal);
      }
    }
  }
);
