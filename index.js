var choo = require('choo')
var html = require('choo/html')

// Initialize choo
var app = choo()

// Templates
const templates = {
  main: require('./templates/main.js')
}

// Routes
app.route('/', templates.main)
app.route('/filter/:type', templates.main)

app.use(function (state, emitter) {
  state.availableAnimals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']
  state.animals = [] 

  function getRandomAnimalType () {
    return state.availableAnimals[
      Math.floor(
        Math.random() * state.availableAnimals.length
      )
    ]
  }

  emitter.on('addAnimal', function (animalObj) {
    let animalType = ''

    if (state.availableAnimals.includes(state.params.type)) {
      animalType = state.params.type
    } else {
      animalType = getRandomAnimalType()   
    }

    const obj = {
      type: animalType,
      x: animalObj.x,
      y: animalObj.y
    }

    state.animals.push(obj)
    emitter.emit('render')
  })

  // remove animal
  emitter.on('removeAnimal', function (i) {
    state.animals.splice(i, 1)
    emitter.emit('render')
  })
})

// Start app
app.mount('div')


