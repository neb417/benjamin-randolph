import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { amount: { type: Number, default: 1750 } }

  connect() {
    this.element.parentElement.classList.add(`show-flash`)
    this.timeout = setTimeout(this.#remove, this.amountValue)
  }

  disconnect() {
    clearTimeout(this.timeout)

    this.#remove()
  }

  // private

  #remove = () => {
    if (this.element.parentElement) {
      this.element.parentElement.classList.remove('show-flash')
    }
    this.element.remove()
  }
}
