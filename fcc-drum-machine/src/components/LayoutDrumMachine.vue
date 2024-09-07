<template>
  <section class="container">
    <header>
      <h1>
        <slot name="title"></slot>
      </h1>
    </header>

    <main class="drum-container">
      <div class="buttons-container">
        <slot name="buttons"></slot>
      </div>
      <div class="controls-container">
        <slot name="controls"></slot>
      </div>
    </main>

    <footer>
      <slot name="author"></slot>
    </footer>
  </section>
</template>

<style scoped>
.drum-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
}
.buttons-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.controls-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

header h1,
footer {
  margin-top: 48px;
  text-align: center;
}
</style>
