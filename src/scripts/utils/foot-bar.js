class FootBar extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = null;
    this._style = null;

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this._notesFooterText = '&copy; 2024 Lidya Rahmi - F02';
  }

  _updateStyles() {
    this._style.textContent = `
            :host{
                display: block;
                width: 100%;
                background-color: darkolivegreen;
                color: white;
                margin-top: 20px;
                font-size: 28px;
            }
    
            div{
                padding: 20px 0;
                text-align: center;
            }
            `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyles();

    const div = document.createElement('div');
    div.innerHTML = `<notes-footer>${this._notesFooterText}</notes-footer>`;

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.appendChild(div);
  }
}

customElements.define('foot-bar', FootBar);
