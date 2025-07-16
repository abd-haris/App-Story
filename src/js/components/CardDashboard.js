import { html } from "lit";
import LitWithoutShadowDOM from "./base/litWithoutShadowDOM";

class CardDashboard extends LitWithoutShadowDOM {
  static properties = {
    classes: { type: String, reflect: true },
    content: { type: String, reflect: true },
    description: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.classes = "";
    this.content = "";
    this.description = "";
  }

  render() {
    return html`
      <div class="card_total-story card ${this.classes}">
        <div class="card-body">
          <h2>${this.content}</h2>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("card-dashboard", CardDashboard);
