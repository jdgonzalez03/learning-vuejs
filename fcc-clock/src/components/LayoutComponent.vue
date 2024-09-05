<script setup></script>
<template>
  <section class="container">
    <header>
      <h1>
        <slot name="heading"></slot>
      </h1>
    </header>

    <section class="control-lenght">
      <div class="control">
        <slot name="break"></slot>
      </div>

      <div class="control">
        <slot name="session"></slot>
      </div>
    </section>

    <section class="timer">
      <slot name="timer"></slot>
    </section>

    <section class="control-timer">
      <slot name="control-timer"></slot>
    </section>

    <footer class="author">
      <slot name="author"></slot>
    </footer >
  </section>
</template>

<style scoped>
  .container {
    min-width: 520px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .control-lenght{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 8px;
    width: 400px;
  }

  .control{
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .timer{
    text-align: center;
    font-size: 1.4em;
  }
  .timer-control {
    margin: 0 auto;
  }
  .author{
    margin-top: 12px;
  }
  header h1{
    font-size: 2.5em;
    margin: 0;
  }

</style>
