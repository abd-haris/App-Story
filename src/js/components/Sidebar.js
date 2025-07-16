import { html } from "lit";
import LitWithoutShadowDOM from "./base/litWithoutShadowDOM";

class Sidebar extends LitWithoutShadowDOM {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperties();
  }

  _checkAvailabilityProperties() {
    if (!this.hasAttribute("brandName")) {
      throw new Error(`Attribute 'brandName' harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav id="sidebar" class="h-100 w-100 nav position-fixed ps-3">
        <side-button @click="${this._drawer}" id="close-navbar" class="position-absolute d-lg-none" icon="bi-x-lg"></side-button>
        <div class="d-flex flex-column align-items-center">
          <div class="mt-2 mb-3 d-flex justify-content-between w-100">
            <h1 class="fs-3 fw-semibold mt-3 ms-3">${this.brandName}</h1>
          </div>
          <div class="d-flex flex-column container gap-2 gap-md-3 h-75">
            <a href="/" class="text-decoration-none text-dark fs-5"><i class="bi bi-speedometer"></i> Dasboard</a>
            <a href="/add-story.html" class="text-decoration-none text-dark fs-5"><i class="bi bi-plus-circle-fill"></i> Buat Cerita</a>
          </div>
        </div>
      </nav>
    `;
  }

  _drawer() {
    const drawerMenu = document.getElementById("drawer-menu");
    const sidebar = document.getElementById("sidebar");
    drawerMenu.classList.add("drawer-visible");
    drawerMenu.classList.remove("drawer-hidden");
    sidebar.classList.add("nav-hidden");
    sidebar.classList.remove("nav-visible");
  }
}

customElements.define("side-bar", Sidebar);
