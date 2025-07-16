import { html } from "lit";
import LitWithoutShadowDOM from "./base/litWithoutShadowDOM";

class CardItem extends LitWithoutShadowDOM {
  static properties = {
    date: { type: String, reflect: true },
    image: { type: String, reflect: true },
    description: { type: String, reflect: true },
    name: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.date = "";
    this.image = "";
    this.description = "";
    this.name = "";
  }

  render() {
    return html`
      <div class="card">
        <div class="date">
          <p class="">${this.date}</p>
        </div>
        <div class="profile-pic">
          <img src="${this.image}" alt="image-card" class="w-100" />
        </div>
        <div class="bottom bg-info">
          <div class="content-description">
            <span class="description">${this.description}</span>
          </div>
          <div class="bottom-bottom">
            <p class="name fs-5 fw-bold">${this.name}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("card-item", CardItem);
