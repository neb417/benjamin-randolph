import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { amount: { type: Number, default: 1500 } }

  connect() {
    this.element.classList.add('show-flash')
    this.timeout = setTimeout(this.#remove, this.amountValue)
  }

  disconnect() {
    clearTimeout(this.timeout)

    this.#remove()
  }

  // private

  #remove = () => {
    this.element.classList.remove('show-flash')
    setTimeout(() => {
      this.element.remove()
    }, 250)
  }
}
