import { LitElement } from "lit";

class LitWithoutShadowDOM extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this._handleClick.bind(this)); // Tambahkan event listener manual jika diperlukan
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this._handleClick.bind(this)); // Cleanup event listener
  }

  _handleClick(event) {
    // Override ini untuk menangani click event jika diperlukan
    console.log("Click handled in LitWithoutShadowDOM", event);
  }

  // Pastikan properti diperbarui dengan benar
  shouldUpdate(changedProperties) {
    return true; // Izinkan pembaruan setiap kali properti berubah
  }

  // Metode untuk memicu pembaruan manual jika diperlukan
  requestUpdate() {
    super.requestUpdate();
  }
}

export default LitWithoutShadowDOM;
