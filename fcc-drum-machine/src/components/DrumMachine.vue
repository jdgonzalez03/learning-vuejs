<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import LayoutDrumMachine from '@/components/LayoutDrumMachine.vue'
import { audios } from '@/assets/constants.js'

const currentAudio = ref('Play something')
const volumenAudio = ref(50)
const isOn = ref(false)

const playAudio = (description, keyTrigger) => {
  if (!isOn.value) {
    return
  }

  currentAudio.value = description
  const audioElement = document.getElementById(keyTrigger)

  //Validaciones
  if (audioElement) {
    //Volume
    audioElement.volume = volumenAudio.value / 100
    // Añadir el manejador para el evento canplaythrough
    audioElement.addEventListener('canplaythrough', () => {
      audioElement.play().catch((error) => {
        console.error('Error al reproducir el audio:', error)
      })
    })

    audioElement.addEventListener('error', () => {
      console.error('Error al cargar el audio:', audioElement.src)
    })

    audioElement.play().catch((error) => {
      console.error('Error al intentar reproducir el audio:', error)
    })
  } else {
    console.error(`No audio element found for key: ${keyTrigger}`)
  }
}

const handleKeydown = (event) => {
  const audio = audios.find((audio) => audio.keyTrigger === event.key.toUpperCase())
  if (audio) {
    playAudio(audio.description, audio.keyTrigger)
  }
}

//Agregar evento de presionar las letras
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div id="drum-machine" :class="{ 'machine-off': !isOn }">
    <LayoutDrumMachine>
      <template #title> Drum Machine </template>
      <template #buttons>
        <button
          class="drum-pad"
          v-for="{ src, keyTrigger, description } in audios"
          :key="keyTrigger"
          :id="description"
          :disabled="!isOn"
          @click="playAudio(description, keyTrigger)"
        >
          {{ keyTrigger }}
          <audio :id="keyTrigger" :src="src" class="clip"></audio>
        </button>
      </template>
      <template #controls>
        <button @click="isOn = !isOn">
          {{ isOn ? `Off` : `On` }}
        </button>
        <h2 id="display">{{ currentAudio }}</h2>
        <input type="range" min="0" max="100" v-model="volumenAudio" value="50" :disabled="!isOn" />
        <h3 class="volume-text">{{ `Volumen: ${volumenAudio}` }}</h3>
        <p v-if="!isOn" class="power-off-message">
          Press "On" to <br />
          activate the machine!
        </p>
      </template>
      <template #author> By <span class="author">jdgonzalez03</span> </template>
    </LayoutDrumMachine>
  </div>
</template>

<style>
#drum-machine {
  min-width: 520px;
  padding: 20px;
  border: 5px solid #007bff;
  border-radius: 10px;
  color: white;
  background-color: #1e1e1e; /* Fondo oscuro para resaltar los pads */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.machine-off {
  opacity: 0.6;
}

.drum-pad {
  background-color: #282828;
  border: 2px solid #444;
  border-radius: 8px;
  color: #fff;
  font-size: 1.5rem;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  text-align: center;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

.drum-pad:disabled {
  background-color: #555;
  cursor: not-allowed;
}

.drum-pad:active {
  background-color: #444;
}

.clip {
  display: none; /* Oculta el elemento de audio */
}

#display {
  color: #fff;
  background-color: #333;
  border: 2px solid #555;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 10px 0;
}

button {
  background-color: #333;
  color: #fff;
  border: 2px solid #444;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

button:hover {
  background-color: #444;
}

h2 {
  width: 120px;
  text-align: center;
}

input[type='range'] {
  margin: 10px 0;
  width: 100%;
}

.author {
  font-weight: bold;
}

.power-off-message {
  text-align: center;
  color: red;
  font-weight: bold;
  font-size: 0.8em;
}

@media (max-width: 720px) {
  #drum-machine {
    min-width: 240px;
  }

  .drum-pad {
    width: 50px;
    height: 50px;
    font-size: 0.9rem;
    padding: 10px 10px;
  }

  #display,
  button,
  .volume-text {
    font-size: 0.8em;
  }

  #display {
    width: 70px;
  }

  input[type='range'] {
    width: 70%;
  }
}
</style>
