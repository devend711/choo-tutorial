var html = require('choo/html')

// export module
module.exports = function (onclick, animal, animalIndex) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  // create html template
  return html`
    <img src="assets/img/${type}.gif" style="left: ${x}px; top: ${y}px;" id=${animalIndex} onclick=${onclick}>
  `
}
