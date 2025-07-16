import { html, nothing } from "lit";
import LitWithoutShadowDOM from "./base/litWithoutShadowDOM";

class NavButton extends LitWithoutShadowDOM {
  static properties = {
    id: { type: String, reflect: true },
    classes: { type: String, reflect: true },
    icon: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.classes = "";
    this.id = "";
  }

  render() {
    return html` <button id="${this.id}" class="${this.classes}" @click=${this._handleClick}>${this._templateIcon()}</button>`;
  }

  _templateIcon() {
    if (this.icon) {
      return html`<i class="bi ${this.icon} fs-1"></i>`;
    }

    return html;
  }

  _handleClick(e) {
    e.stopPropagation();
    this.dispatchEvent(new Event("click"));
  }
}

customElements.define("nav-button", NavButton);

// <button id="drawer-button" class="border-0 bg-transparent position-absolute d-md-none"><i class="bi bi-list fs-1">Tombol</i></button> `;

// <i class="bi bi-list fs-1">Tombol</i>
