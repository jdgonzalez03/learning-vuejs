<script setup></script>
<template>
  <section class="container">
    <header>
      <h1>
        <slot name="heading"></slot>
      </h1>
    </header>

    <section class="control-lenght">
      <div class="break-lenght">
        <slot name="break"></slot>
      </div>

      <div class="session-lenght">
        <slot name="session"></slot>
      </div>
    </section>

    <section class="timer">
      <slot name="timer"></slot>
    </section>

    <section class="control-timer">
      <slot name="control-timer"></slot>
    </section>
  </section>
</template>
