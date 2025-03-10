import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log('Controller connected')
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  disconnect() {
    window.removeEventListener('resize', this.resize.bind(this))
  }

  resize() {
    const width = window.innerWidth
    const img = document.getElementById('skill-icons')
    console.log(`width: ${width}`)

    if (width < 1168) {
      console.log(`img src: ${img}`)
      img.src = "https://go-skill-icons.vercel.app/api/icons?i=ruby,rails,postgres,redis,git,heroku,github,githubactions,api,rubymine,vscode,postman,apple,sass,tailwind,bootstrap&perline=16"
    } else {
      img.src = "https://go-skill-icons.vercel.app/api/icons?i=ruby,rails,postgres,redis,git,heroku,github,githubactions,api,rubymine,vscode,postman,apple,sass,tailwind,bootstrap&perline=4"
    }
  }
}
