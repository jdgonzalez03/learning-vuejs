<script setup>
import { ref } from 'vue'

const names = ref(['Juan', 'Daiana', 'Alexandra'])

const movies = ref([
  {
    id: 1,
    titulo: 'Inception',
    director: 'Christopher Nolan',
    año: 2010,
    genero: 'Ciencia ficción',
    duracion: 148 // duración en minutos
  },
  {
    id: 2,
    titulo: 'The Matrix',
    director: 'Lana Wachowski, Lilly Wachowski',
    año: 1999,
    genero: 'Ciencia ficción',
    duracion: 136
  },
  {
    id: 3,
    titulo: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    año: 1994,
    genero: 'Crimen',
    duracion: 154
  },
  {
    id: 4,
    titulo: 'The Godfather',
    director: 'Francis Ford Coppola',
    año: 1972,
    genero: 'Crimen',
    duracion: 175
  },
  {
    id: 5,
    titulo: 'The Dark Knight',
    director: 'Christopher Nolan',
    año: 2008,
    genero: 'Acción',
    duracion: 152
  }
])

const films = ref([
  [
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    "Schindler's List",
    'The Green Mile'
  ],
  ['Pulp Fiction', 'Fight Club', 'Forrest Gump', 'The Silence of the Lambs', 'The Usual Suspects'],
  [
    'Inception',
    'The Matrix',
    'Interstellar',
    'Blade Runner',
    'Eternal Sunshine of the Spotless Mind'
  ],
  ['The Lord of the Rings', 'Star Wars', 'Harry Potter', 'The Hobbit', 'Jurassic Park'],
  ['Titanic', 'Avatar', 'The Terminator', 'The Sixth Sense', 'Gladiator']
])

const games = ref({
  id: 1,
  title: 'Epic Adventure Game',
  genre: ['Action', 'Adventure', 'RPG'],
  platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
  releaseDate: '2022-03-15',
  developer: {
    name: 'Awesome Game Studios',
    location: 'San Francisco, CA',
    teamSize: 50
  },
  ratings: {
    metacritic: 90,
    user: 4.8
  },
  features: {
    singlePlayer: true,
    multiplayer: true,
    onlineCoop: true,
    splitScreen: false
  },
  systemRequirements: {
    minimum: {
      os: 'Windows 10',
      processor: 'Intel Core i5',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 970',
      storage: '50 GB available space'
    },
    recommended: {
      os: 'Windows 11',
      processor: 'Intel Core i7',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 3080',
      storage: '100 GB available space'
    }
  },
  storyline: 'Embark on a thrilling adventure to save the world from impending doom!',
  characters: ['Hero', 'Sidekick', 'Villain', 'NPCs'],
  achievements: [
    { id: 1, name: 'Master Explorer', description: 'Explore every corner of the game world' },
    { id: 2, name: 'Legendary Warrior', description: 'Complete the game on the hardest difficulty' }
  ]
})
</script>

<template>
  <h4>Example - Basics</h4>

  <p v-for="(name, index) in names" :key="index">{{ index + 1 }} -> {{ name }}</p>

  <h4>Another example - Destructuring</h4>
  <ul v-for="({id, titulo, director, año, genero, duracion}, index) in movies" :key="index">
    <li>{{id}}</li>
    <li>{{titulo}}</li>
    <li>{{director}}</li>
    <li>{{año}}</li>
    <li>{{genero}}</li>
    <li>{{duracion}}</li>
  </ul>

  <h4>Another example - Array inside array</h4>
  <ul v-for="(film, i) in films" :key="i">
    <li v-for="(f, index) in film" :key="index">{{ f }}</li>
  </ul>

  <h4>Another example - Objects inside objects</h4>
  <ul v-for="(value, key , index) in games" :key="value">
    <li> {{index}} ---  {{key}} ---- {{value}}</li>
  </ul>
</template>
