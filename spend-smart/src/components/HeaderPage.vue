<script setup>
const reload = () => {
  location.reload()
}
</script>

<template>
  <header>
    <img @click="reload" src="@/assets/spend-smart-icon.svg" alt="Logo" />
    <h1>Spend<strong>Smart</strong></h1>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100vw;
  padding: 0 16px;
}

img,
strong {
  width: 48px;
}

h1 {
  font-size: 1.4rem;
  width: 80%;
  text-align: center;
  margin: 0 8px;
}
</style>