import { html } from "lit";
import LitWithoutShadowDOM from "./base/litWithoutShadowDOM";

class Navbar extends LitWithoutShadowDOM {
  constructor() {
    super();
  }
  render() {
    return html`
      <div id="drawer-menu" class="d-flex justify-content-end p-3 drawer w-100 position-fixed">
        <nav-button @click=${this._drawer} id="drawer-button" classes="position-absolute d-lg-none" icon="bi-list"></nav-button>
        <h1 class="fs-3">All Course</h1>
      </div>
    `;
  }

  _drawer() {
    const sidebar = document.getElementById("sidebar");
    const drawerMenu = document.getElementById("drawer-menu");
    sidebar.classList.add("nav-visible");
    sidebar.classList.remove("nav-hidden");
    drawerMenu.classList.add("drawer-hidden");
    drawerMenu.classList.remove("drawer-visible");
  }
}

customElements.define("nav-bar", Navbar);
