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

app.use(function (state, emitter) {
  state.availableAnimals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']
  state.animals = [] 
  emitter.on('addAnimal', function (animalObj) {
    const randomAnimalType = state.availableAnimals[
      Math.floor(
        Math.random() * state.availableAnimals.length
      )
    ]

    const obj = {
      type: randomAnimalType,
      x: animalObj.x,
      y: animalObj.y
    }

    state.animals.push(obj)
    emitter.emit('render')
  })
})

// Start app
app.mount('div')


