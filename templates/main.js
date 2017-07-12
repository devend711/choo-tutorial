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

  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="assets/img/bg.gif" onclick=${addAnimal} />
        ${state.animals.map(animal)}
      </div>
    </div>
  `
}
