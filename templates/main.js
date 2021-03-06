const html = require('choo/html')
const animal = require('./animal.js')

module.exports = function (state, emit) {
  const type = state.animals.type
  const x = state.animals.x
  const y = state.animals.y

  function addAnimal (event) {
    const x = event.offsetX - 20
    const y = event.offsetY - 10
    const obj = {x, y}
    emit('addAnimal', obj)
  }

  function removeAnimal (event) {
    emit('removeAnimal', event.target.id)
  }

  function animalMap (obj, i) {
    // Get the "type" URL parameter
    const type = state.params.type
    if (type && type !== obj.type) return
    return animal(removeAnimal, obj, i)
  }

  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/img/bg.gif" onclick=${addAnimal} />
        ${state.animals.map(animalMap)}
      </div>
      <div class="controls">
        <ul class="filters">
          <li><a href="/">all</a></li>
          <li><a href="/filter/crocodile">crocodiles</a></li>
          <li><a href="/filter/koala">koalas</a></li>
          <li><a href="/filter/lion">lions</a></li>
          <li><a href="/filter/tiger">tigers</a></li>
          <li><a href="/filter/walrus">walruses</a></li>
        </ul>
      </div>
    </div>
  `
}
