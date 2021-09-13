class App {
  constructor (core, appId, metadata) {
    this.core = core

    if (!appId) throw new Error('app id is missing')
    this.id = String(appId)

    if (!metadata) throw new Error('metadata is missing')
    if (!metadata.name) throw new Error('name is missing')

    this.name = metadata.name
    this.description = metadata.description || ''
  }

  start () {

  }
}

export default App
