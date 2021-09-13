import App from './App'

class Core {
  constructor () {
    this.processes = []
  }

  startApp (appId) {
    import(`../apps/${appId}/app`).then(module => {
      const app = new module.default(this)

      if (!(app instanceof App)) throw new TypeError('malformed app: dost not extend App class')

      this.processes.push(app)

      const root = document.getElementById('root')
      root.appendChild(app.startView.element)

      app.startView.show()
    })
    .catch(e => alert(e.stack))
  }
}

export default Core
