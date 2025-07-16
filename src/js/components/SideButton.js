import { html } from "lit";
import LitWithoutShadowDOM from "./base/litWithoutShadowDOM";

class SideButton extends LitWithoutShadowDOM {
  static properties = {
    id: { type: String, reflect: true },
    classes: { type: String, reflect: true },
    icon: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.id = "";
    this.classes = "";
  }

  render() {
    return html` <button id="${this.id}" class="${this.classes}" @click=${this._handleClick}>${this._templateIcon()}</button> `;
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

customElements.define("side-button", SideButton);
