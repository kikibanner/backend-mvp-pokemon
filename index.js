const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

let pokemons= [
    {
        id: 1,
        name: "Bulbasaur"
    },
    {
        id: 2,
        name: "Squirtle"
    },
    {
        id: 3,
        name: "Charmander"
    },
    {
        id: 4,
        name: "Pikachu"
    }
]

let caughtPokemons = [
      {
        id: 1,
        name: "Bulbasaur",
        datecaught: "2019-05-30T17:30:31.098Z",
        caught: true,
        important: false,
        nickname: "Mat Solar System"
      },
      {
        id: 2,
        name: "Squirtle",
        datecaught: "2019-05-30T18:39:34.091Z",
        caught: true,
        important: true,
        nickname: "Cristiano"
      },
      {
        id: 3,
        name: "Charmander",
        datecaught: "2019-05-30T19:20:14.298Z",
        caught: true,
        important: false,
        nickname: "Cristiano"
      },
      {
        id: 4,
        name: "Pikachu",
        datecaught: "2019-05-30T19:20:14.298Z",
        caught: true,
        important: true,
        nickname: "Cristiano"
      },
      {
        name: "Bulbasaur",
        nickname: "Cristiano",
        datecaught: "2022-01-20T07:42:28.682Z",
        caught: true,
        important: false,
        id: 5
      },
      {
        name: "Pikachu",
        nickname: "Cristiano",
        datecaught: "2022-01-20T07:44:06.330Z",
        caught: true,
        important: false,
        id: 6
      },
      {
        name: "Charmander",
        nickname: "Cristiano",
        datecaught: "2022-01-20T07:44:17.115Z",
        caught: true,
        important: true,
        id: 7
      }
]


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/pokemons', (request, response) => {
    response.json(pokemons)
})

app.get('/api/caughtpokemons', (request, response) => {
    response.json(caughtPokemons)
})

app.get('/api/pokemons/:id', (request, response) => {
    const id = Number(request.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    
    if (pokemon) {    
        response.json(pokemon)  
    } else {    
        response.status(404).end()  
    }
})

app.get('/api/caughtpokemons/:id', (request, response) => {
    const id = Number(request.params.id)
    const caughtPokemon = caughtPokemons.find(pokemon => pokemon.id === id)
    
    if (caughtPokemon) {    
        response.json(caughtPokemon)  
    } else {    
        response.status(404).end()  
    }
})

app.delete('/api/pokemons/:id', (request, response) => {
    const id = Number(request.params.id)
    pokemons = pokemons.filter(pokemon => pokemon.id !== id)

    response.status(204).end()
})

app.delete('/api/caughtpokemons/:id', (request, response) => {
    const id = Number(request.params.id)
    caughtPokemons = caughtPokemons.filter(caughtpokemon => caughtpokemon.id !== id)

    response.status(204).end()
})
  
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})