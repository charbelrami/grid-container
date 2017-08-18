class GridElement extends HTMLElement {
  setMediaQueries(attrName, val) {
    let mediaQueryStyleNode = this.shadowRoot.querySelector(`#mq-${attrName}`);

    if (mediaQueryStyleNode) {
      mediaQueryStyleNode.innerHTML = '';
    } else {
      mediaQueryStyleNode = document.createElement('style');
      mediaQueryStyleNode.id = `mq-${attrName}`;
      const slot = this.shadowRoot.querySelector('slot');
      this.shadowRoot.insertBefore(mediaQueryStyleNode, slot);
    }

    val = val.split(';');

    for (const valElem of val) {
      if (valElem.includes('@')) {
        const valElemSplit = valElem.split('@');
        const propertyVal = valElemSplit[0];
        const query = valElemSplit[1];

        let propertyName = `grid-${attrName}`;

        if (attrName === 'grid') {
          propertyName = 'grid';
        }

        if (attrName === 'gutter') {
          propertyName = 'grid-gap';
        }

        if (attrName === 'areas') {
          propertyName = 'grid-template-areas';
        }

        mediaQueryStyleNode.innerHTML += `@media ${query} {
            :host([${attrName}]) {
              ${propertyName}: ${propertyVal};
            }
          }`;
      } else {
        this.style.setProperty(`--${attrName}`, valElem);
      }
    }
  }
}

class GridContainer extends GridElement {
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
    // removes last semicolon
    newVal = newVal.replace(/;([\s]+)?$/, '');

    if (newVal.includes(';')) {
      this.setMediaQueries(name, newVal);
    } else {
      this.style.setProperty(`--${name}`, newVal);
    }
  }
}

customElements.define('grid-container', GridContainer);

class GridItem extends GridElement {
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
    // removes last semicolon
    newVal = newVal.replace(/;([\s]+)?$/, '');

    if (newVal.includes(';')) {
      this.setMediaQueries(name, newVal);
    } else {
      this.style.setProperty(`--${name}`, newVal);
    }
  }
}

customElements.define('grid-item', GridItem);
