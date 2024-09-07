<template>
  <section class="container">

    <header>
      <h1>
        <slot name="title"></slot>
      </h1>
    </header>

    <main>
      <slot name="editor"></slot>
      <slot name="preview"></slot>
    </main>

    <footer>
      <slot name="author"></slot>
    </footer>

  </section>

</template>

<style scoped>

  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  main{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>