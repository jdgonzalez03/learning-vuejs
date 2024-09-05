<script setup>
  import { reactive, ref, computed, watch } from  'vue'
  import LayoutComponent from './LayoutComponent.vue';
  
  //Variables de break y session
  const breakCount = reactive({
    count: 5,
    increment() {
      if(!isRunning.value) {
        this.updateCount(this.count + 1);
      }
    },
    decrement() {
      if(!isRunning.value){
        this.updateCount(this.count - 1);
        
      }
    },
    updateCount(newCount) {
      this.count = Math.min(Math.max(newCount, 1), 60);
    }
  });

  const sessionCount = reactive({
    count: 25,
    increment() {
      if(!isRunning.value) {
        this.updateCount(this.count + 1);
      }
    },
    decrement() {
      if(!isRunning.value){
        this.updateCount(this.count - 1);
        
      }
    },
    updateCount(newCount) {
      this.count = Math.min(Math.max(newCount, 1), 60);
    }
  });

  //Estado del temporizdor
  const pomodoroInterval = ref(null)
  const timer = ref(sessionCount.count * 60)
  const isBreak = ref(false)
  const isRunning = ref(false)

  //Sincroniza cambios del session con el timer
  watch(sessionCount, newCount => {
    if (!isBreak.value) {
      timer.value = newCount.count * 60
    }
  })

  watch(timer, newTimer => {
    if (newTimer === 0){
      const audio = document.getElementById('beep')
      audio.currentTime = 2
      audio.play()
      audio.play().catch(() => {
        console.log('El navegador ha bloqueado la reproducción automática');
      });
    }
  })

  const reset = () => {
    breakCount.count = 5
    sessionCount.count = 25
    
    isBreak.value = false // Reinicia el estado al iniciar sesión
    timer.value = sessionCount.count * 60
    isRunning.value = false
    
    clearInterval(pomodoroInterval.value)
    pomodoroInterval.value = null;

    const audio = document.getElementById('beep')
    audio.currentTime = 0
    audio.pause()
  }

  //Inicio pomodoro
  const startPomodoro = () => {
  if (isRunning.value) {
    clearInterval(pomodoroInterval.value)
    pomodoroInterval.value = null
    isRunning.value = false
  } else {
    isRunning.value = true
    pomodoroInterval.value = setInterval(() => {
      if (timer.value <= 0) {
        // Alterna entre sesión y descanso
        isBreak.value = !isBreak.value
        timer.value = isBreak.value ? breakCount.count * 60 : sessionCount.count * 60
      } else {
        timer.value--
      }
    }, 1000)
  }
}
  
  //Formatear minutos y segundos
  const formattedTime = computed(() => {
    const minutes = Math.floor(timer.value / 60);
    const seconds = timer.value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  })
</script>

<template>
  <main>
    <LayoutComponent>
      <template #heading>25 + 5 Clock</template>

      <template #break>
        <h3 id="break-label">Break Lenght</h3>
        <div class="btn-container">
          <button 
            id="break-decrement" 
            @click="breakCount.decrement"
            :style="{cursor: !isRunning ? 'pointer' : 'not-allowed'}"
            >
            <i class="bi bi-arrow-down"></i>
          </button>
          <span id="break-length">{{ breakCount.count }}</span>
          <button 
            id="break-increment" 
            @click="breakCount.increment"
            :style="{cursor: !isRunning ? 'pointer' : 'not-allowed'}"
          >
            <i class="bi bi-arrow-up"></i>

          </button>
        </div>
      </template>

      <template #session>
        <h3 id="session-label">Session Lenght</h3>
        <div class="btn-container">
          <button 
            id="session-decrement" 
            @click="sessionCount.decrement"
            :style="{cursor: !isRunning ? 'pointer' : 'not-allowed'}"
          >
          <i class="bi bi-arrow-down"></i>
        </button>
          <span id="session-length" >{{ sessionCount.count }}</span>
          <button 
            id="session-increment" 
            @click="sessionCount.increment"
            :style="{cursor: !isRunning ? 'pointer' : 'not-allowed'}"
          >
          <i class="bi bi-arrow-up"></i>
        </button>
        </div>
      </template>

      <template #timer>
        <h3 id="timer-label">Session - {{isBreak ? 'Break' : 'Working'}}</h3>
        <h2 id="time-left">{{ formattedTime }}</h2>
      </template>

      <template #control-timer>
        <div class="btn-container">
          <button 
            id="start_stop"  
            aria-label="Start/ Pause Timer"
            @click="startPomodoro"
          >
          <i :class="isRunning ? 'bi bi-pause' : 'bi bi-play'"></i>
          </button>
          <button 
            id="reset" 
            aria-label="Reset Timer"
            @click="reset"
          >
            <i class="bi bi-arrow-repeat"></i>
          </button>
        </div>
      </template>

      <template #author>
        By <span>jdgonzalez03</span>
      </template>
    </LayoutComponent>
    <audio id="beep">
      <source src="../assets/AlarmSound.mp3"  type="audio/mpeg">
    </audio>
  </main>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #000; /* Fondo negro */
  color: #fff; /* Texto blanco */
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  width: 100%;
  height: 100%;
  padding: 20px;
}

h3 {
  color: #D8BFD8; /* Morado suave */
}

h2 {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
}

.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

button {
  background-color: #6A0DAD; /* Botones morado oscuro */
  border: 2px solid #fff;
  border-radius: 8px;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #9B30FF; /* Cambia a morado más claro al hacer hover */
}

button:disabled {
  background-color: #333; /* Deshabilitado en gris oscuro */
  cursor: not-allowed;
}

span {
  color: #fff;
  font-weight: bold;
  font-size: 1.4rem;
}

#author span {
  color: #D8BFD8; /* Morado suave */
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); /* Sombra sutil */
}


#timer-label {
  font-size: 1.8rem;
  color: #fff;
}

#time-left {
  color: #9B30FF; /* Morado claro */
  font-size: 2.5rem;
}

audio {
  display: none;
}

i {
  font-size: 1.7em;
}

/* Media query para dispositivos móviles */
@media (max-width: 768px) {
  h2 {
    font-size: 2.2rem;
  }

  h3, #timer-label {
    font-size: 1.5rem;
  }

  .btn-container {
    gap: 8px;
  }

  button {
    padding: 8px;
    font-size: 1.2rem;
  }

  span {
    font-size: 1.2rem;
  }

  i {
    font-size: 1.5em;
  }

  main {
    padding: 10px;
  }
}
</style>
