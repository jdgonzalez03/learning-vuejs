<script setup>
  import { reactive } from  'vue'
  import LayoutComponent from './LayoutComponent.vue';
  
  const breakCount = reactive({
    count: 5,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  })

  const sessionCount = reactive({
    count: 25,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  })

</script>

<template>
  <main>
    <LayoutComponent>
      <template #heading>Clock + 5</template>

      <template #break>
        <h3 id="break-label">Break Lenght</h3>
        <div>
          <button id="session-increment" @click="breakCount.increment">Incrementar</button>
          <span>{{ breakCount.count }}</span>
          <button id="break-decrement" @click="breakCount.decrement">Decrementar</button>
        </div>
      </template>

      <template #session>
        <h3 id="session-label">Session Lenght</h3>

        <div>
          <button id="session-increment" @click="sessionCount.increment">Incrementar</button>
          <span>{{ sessionCount.count }}</span>
          <button id="session-decrement" @click="sessionCount.decrement">Decrementar</button>
        </div>
      </template>

      <template #timer>
        <h3>Session</h3>
        <h2>25:00</h2>
      </template>

      <template #control-timer>
        <div>
          <button aria-label="Start Timer">Start</button>
          <button aria-label="Pause Timer">Pause</button>
          <button aria-label="Reset Timer">Reset</button>
        </div>
      </template>
    </LayoutComponent>
  </main>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
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
}
</style>