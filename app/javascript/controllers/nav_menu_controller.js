import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  values = {
    btnNavEl: document.querySelector(`.btn-mobile-nav`),
    headerEl: document.querySelector(`.header`),
    allLinksEl: document.querySelectorAll(`a:link`)
  }

  toggleMenu(){
    this.values.headerEl.classList.toggle(`nav-open`)
  }

  smoothScroll(event) {
    event.preventDefault();
    const link = event.target
    const href = link.getAttribute('href')

    document.querySelector(href).scrollIntoView({behavior: `smooth`});

    this.toggleMenu();
  }

  smoothScrollTop(event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  }
}
